import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Quiz } from '@/components/Quiz/Quiz';
import { setQuestions } from '../../../domains/quiz/slice';

import { IQuestion } from '../../../models/interface';

interface QuizPageProps {
  questions: IQuestion[];
}

export default function Page({ questions }: QuizPageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuestions(questions));
  }, [questions, dispatch]);
  return <Quiz questions={questions} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const host = req.headers.host;
  const topic = params?.topic as string;

  const response = await fetch(`http://${host}/api/question?topic=${topic}`);
  if (response.status === 404) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
  const data = await response.json();
  return {
    props: {
      questions: data,
    },
  };
};
