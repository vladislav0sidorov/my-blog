import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
