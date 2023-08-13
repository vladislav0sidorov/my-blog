import React from 'react'

import { Button, ButtonVariables } from '../../Button'
import cls from './Code.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import CopyIcon from '@/shared/assets/icons/copy.svg'
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
      <Button onClick={onCopy} theme={ButtonVariables.CLEAR} className={cls.copyBtn}>
        {isCopy ? <DoneIcon className={cls.copyIcon} /> : <CopyIcon className={cls.copyIcon} />}
      </Button>
      <code>{text}</code>
    </pre>
  )
})
