import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph'

let isNotFoundFeature = true

const removedFeatureName = process.argv[2] // isArticleRaitingEnebled
const featureState = process.argv[3] // on/off

const toggleFeaturesName = 'toggleFeatures'
const ToggleFeaturesComponentName = 'ToggleFeaturesComponent'

if (!removedFeatureName) {
  throw new Error('Введите название фитчи')
}

if (!featureState) {
  throw new Error('Введите состояние фитчи (on/off)')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Введите on или off')
}

if (featureState === 'on' && !isNotFoundFeature) {
  console.log(`Фитча ${removedFeatureName} включена для всех пользователей`)
}

if (featureState === 'off' && !isNotFoundFeature) {
  console.log(`Фитча ${removedFeatureName} выключена`)
}

const project = new Project({})
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isToggleFunction(node: Node) {
  let isToggleFunctionFlag = false
  node.forEachChild((childNode) => {
    if (childNode.isKind(SyntaxKind.Identifier) && childNode.getText() === toggleFeaturesName) {
      isNotFoundFeature = false
      isToggleFunctionFlag = true
    }
  })

  return isToggleFunctionFlag
}

function isToggleComponent(node: Node) {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier)

  return identifier?.getText() === ToggleFeaturesComponentName
}

function replaceToggleFeature(node: Node) {
  const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

  const nameFunctionProperty = objectOptions?.getProperty('name')
  const onFunctionProperty = objectOptions?.getProperty('on')
  const offFunctionProperty = objectOptions?.getProperty('off')

  const featureName = nameFunctionProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1)
  const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
  const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)

  if (featureName !== removedFeatureName) return

  if (featureState === 'on') {
    node.replaceWithText(onFunction?.getBody()?.getText() ?? '')
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction?.getBody()?.getText() ?? '')
  }
}

function getAttributeNodeByName(JsxAttributes: JsxAttribute[], name: string) {
  return JsxAttributes.find((node) => node.getName() === name)
}
const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute?.getFirstDescendantByKind(SyntaxKind.JsxExpression)?.getExpression()?.getText()

  if (value?.startsWith('(')) {
    return value.slice(1, -1)
  }

  return value
}

function replaceToggleFeatureComponent(node: Node) {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

  const onAttribute = getAttributeNodeByName(attributes, 'on')
  const offAttribute = getAttributeNodeByName(attributes, 'off')

  const featureNameAttribute = getAttributeNodeByName(attributes, 'featureName')
  const featureName = featureNameAttribute?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText()?.slice(1, -1)

  if (featureName !== removedFeatureName) return

  const offValue = getReplacedComponent(offAttribute)
  const onValue = getReplacedComponent(onAttribute)

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue)
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue)
  }
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    const isToggleFunctionCondition = node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)
    const isToggleComponentCondition = node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)

    if (isToggleFunctionCondition && isToggleComponentCondition) {
      replaceToggleFeature(node)
      replaceToggleFeatureComponent(node)
    }

    if (isToggleFunctionCondition) {
      replaceToggleFeature(node)
    }

    if (isToggleComponentCondition) {
      replaceToggleFeatureComponent(node)
    }
  })
})

if (isNotFoundFeature) {
  console.log(`Фича ${removedFeatureName} не найдена.`)
}

project.save()
