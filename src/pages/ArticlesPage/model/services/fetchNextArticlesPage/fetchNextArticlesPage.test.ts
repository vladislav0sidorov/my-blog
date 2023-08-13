import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
  // test('change number page', async () => {
  //   const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
  //     articlesPage: {
  //       page: 2,
  //       ids: [],
  //       entities: {},
  //       limit: 5,
  //       isLoading: false,
  //       hasMore: true,
  //     },
  //   });
  //   await thunk.callThunk();
  //   expect(thunk.dispatch).toBeCalledTimes(4);
  //   expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  // });

  test('don`t change number page wiht hasMore false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    })
    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalledWith()
  })

  test('don`t change number page with isLoading true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
      },
    })
    await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalledWith()
  })
})
