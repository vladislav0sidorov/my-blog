import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultLoginReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultLoginReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
