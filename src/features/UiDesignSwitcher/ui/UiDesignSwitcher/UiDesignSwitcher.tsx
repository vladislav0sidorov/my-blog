import { useTranslation } from 'react-i18next'
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import { ListBox } from '@/shared/ui/redesigned/Popups'
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'

interface UiDesignSwitcherProps {
  className?: string
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const isAppRedesigned = getFeatureFlag('isAppRedesigned')
  const [selectedValue, setSelectedValue] = useState(isAppRedesigned ? 'new' : 'old')
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ]

  const onChange = (value: string) => {
    if (authData) {
      setSelectedValue(value)

      dispatch(
        updateFeatureFlag({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      )
    }
  }

  return <ListBox onChange={onChange} items={items} value={selectedValue} />
})
