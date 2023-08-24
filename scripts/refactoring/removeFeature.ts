import { Node, Project, SyntaxKind } from 'ts-morph'

let isNotFoundFeature = true

const removedFeatureName = process.argv[2] // isArticleRaitingEnebled
const featureState = process.argv[3] // on/off

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
    if (childNode.isKind(SyntaxKind.Identifier) && childNode.getText() === 'toggleFeatures') {
      isNotFoundFeature = false
      isToggleFunctionFlag = true
    }
  })

  return isToggleFunctionFlag
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression)

      const nameFunctionProperty = objectOptions?.getProperty('name')
      const onFunctionProperty = objectOptions?.getProperty('on')
      const offFunctionProperty = objectOptions?.getProperty('off')

      const featureName = nameFunctionProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1)
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
  })
})

if (isNotFoundFeature) {
  console.log(`Фича ${removedFeatureName} не найдена.`)
}

project.save()
