import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IQuestion } from '../../models/interface';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    sendAnswer: builder.mutation<
      { isCorrect: boolean; correctAnswer: string },
      { topic: string; questionId: number; answer: number }
    >({
      query: (answerData) => ({
        url: '/question',
        method: 'POST',
        body: answerData,
      }),
    }),
  }),
});

export const hooks = {
  useSendAnswer: quizApi.useSendAnswerMutation,
};

export default quizApi;
