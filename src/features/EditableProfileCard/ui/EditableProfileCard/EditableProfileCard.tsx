import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

// import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getProfileValidateErrors);
  const readonly = useSelector(getProfileReadOnly);

  const reducers: ReducersList = {
    profile: profileReducer,
  };

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
      <EditableProfileCardHeader />
      {validateErrors?.length
        && validateErrors?.map((error) => <Text data-testid="EditableProfileCard.Error" key={error} theme={TextTheme.ERROR} text={validateErrorTranslates[error]} />)}
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
    </DynamicModuleLoader>
  );
});
