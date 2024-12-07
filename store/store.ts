import { quizApi } from './../domains/quiz/api';
import { configureStore } from '@reduxjs/toolkit';
import topicReducer from '../domains/topic/slice';
import quizReducer from '../domains/quiz/slice';

export const store = configureStore({
  reducer: {
    topic: topicReducer,
    quiz: quizReducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
