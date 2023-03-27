import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariables } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getAddCommnetFormError } from '../../model/selectors/getAddCommnetFormError/getAddCommnetFormError';
import { getAddCommnetFormText } from '../../model/selectors/getAddCommnetFormText/getAddCommnetFormText';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm: FC<AddCommentFormProps> = React.memo((props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('comment');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommnetFormText);
  const error = useSelector(getAddCommnetFormError);

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  const onCommentTextChange = React.useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = React.useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input className={cls.input} onChange={onCommentTextChange} value={text} placeholder={t('Введите текст комментария')} />
        <Button onClick={onSendHandler} theme={ButtonVariables.OUTLINE}>
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
