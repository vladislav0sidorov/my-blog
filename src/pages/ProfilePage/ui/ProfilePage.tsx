import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
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
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readonly = useSelector(getProfileReadOnly);
  const { id } = useParams<{ id: string }>();

  //! типизация отвалилась
  const validateErrorTranslates: any = {
    [ValidateProfileError.INCORECT_FIRST_NAME]: t('Некорректное имя'),
    [ValidateProfileError.INCORECT_LAST_NAME]: t('Некорректная фамилия'),
    [ValidateProfileError.INCORECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORECT_USERNAME]: t('Некорректное имя пользователя'),
    [ValidateProfileError.INCORECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORECT_AVATAR]: t('Некорректная ссылка на фото профиля'),
    [ValidateProfileError.INCORECT_CITY]: t('Некорректный город'),
    [ValidateProfileError.NO_DATA]: t('Нет информации о профиле'),
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка на сервере'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onEdit = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = React.useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSave = React.useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onChangeFirstname = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value }));
    },
    [dispatch],
  );

  const onChangeLastname = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAge = React.useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          age: Number(value?.replace(/\D/gi, '' || '')),
        }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const onChangeCity = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeAvatar = React.useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCurrency = React.useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = React.useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader onEdit={onEdit} onCancelEdit={onCancelEdit} onSave={onSave} />
        {validateErrors?.length && validateErrors?.map((error) => <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslates[error]} />)}
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
      </Page>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
