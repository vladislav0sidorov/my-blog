import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'

interface ProfilePageProps {
  className?: string
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profile')

  const { id } = useParams<{ id: string }>()

  return (
    <Page data-testid="ProfilePage">
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}
export default ProfilePage
