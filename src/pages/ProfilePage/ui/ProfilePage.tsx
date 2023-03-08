import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
  updateProfileData,
} from 'entities/Profile';
import React from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadOnly);

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSave = React.useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onChangeFirstname = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value }));
  }), [dispatch]);

  const onChangeLastname = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value }));
  }), [dispatch]);

  const onChangeAge = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value?.replace(/\D/gi, '' || '')),
    }));
  }), [dispatch]);

  const onChangeUsername = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }), [dispatch]);

  const onChangeCity = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }), [dispatch]);

  const onChangeAvatar = React.useCallback(((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }), [dispatch]);

  const onChangeCurrency = React.useCallback(((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }), [dispatch]);

  const onChangeCountry = React.useCallback(((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }), [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader
          onEdit={onEdit}
          onCancelEdit={onCancelEdit}
          onSave={onSave}
        />
        <ProfileCard
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
