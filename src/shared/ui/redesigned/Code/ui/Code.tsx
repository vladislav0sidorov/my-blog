import React from 'react'

import cls from './Code.module.scss'
import { Button } from '../../Button'
import { Icon } from '../../Icon'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import CopyIcon from '@/shared/assets/icons/redesign/copy.svg'
import DoneIcon from '@/shared/assets/icons/done.svg'

interface CodeProps {
  className?: string
  text: string
}

export const Code: React.FC<CodeProps> = React.memo((props) => {
  const { className, text } = props
  const [isCopy, setIsCopy] = React.useState(false)

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(text)
    setIsCopy(true)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} variant="clear" className={cls.copyBtn}>
        {isCopy ? <Icon Svg={DoneIcon} /> : <Icon Svg={CopyIcon} />}
      </Button>
      <code>{text}</code>
    </pre>
  )
})
