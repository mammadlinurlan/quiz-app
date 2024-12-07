import React, { useState } from 'react';
import { Stack, Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import SubmitButton from '../SubmitButton/SubmitButton';
import SingleAnswer from './SingleAnswer/SingleAnswer';
import { RootState } from '../../../store/store';
import {
  nextQuestion,
  setIsSubmitted,
  setCorrectAnswersCount,
  setWrongAnswersCount,
  setCorrectAnswer,
  setIsResultsShowing,
} from '../../../domains/quiz/slice';
import { hooks } from '../../../domains/quiz/api';
import { Wrong } from '../SvgComponents/Wrong';

import { useGetTopic } from '../../../hooks/useGetTopic';
import { IAnswer, IQuestion } from '../../../models/interface';
import { useForm } from 'react-hook-form';

interface IProps {
  answers: IAnswer[];
  question: IQuestion;
}
export const Answers: React.FC<IProps> = ({ answers, question }: IProps) => {
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const iconSize = useBreakpointValue({ base: '24px', sm: '32px' });

  const dispatch = useDispatch();
  const { isSubmitted, questions, currentQuestionIndex, isResultsShowing } =
    useSelector((state: RootState) => state.quiz);
  const [sendAnswer, { isLoading }] = hooks.useSendAnswer();
  const topic = useGetTopic();

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<{ answer: number }>();

  const handleNext = () => {
    if (questions.length === currentQuestionIndex + 1) {
      setIsTransitioning(false);
      dispatch(setIsResultsShowing(true));
      return;
    }
    setIsTransitioning(true);
    setTimeout(() => {
      dispatch(setCorrectAnswer(''));
      setIsCorrect(undefined);
      dispatch(nextQuestion());
      dispatch(setIsSubmitted(false));
      reset();
      setIsTransitioning(false);
    }, 500);
  };

  const onsubmit = async (data: { answer: number }) => {
    if (!topic?.text) {
      console.error('Topic is not defined. Please select a topic.');
      return;
    }
    try {
      const result = await sendAnswer({
        topic: topic?.text,
        questionId: question?.id,
        answer: +data.answer,
      }).unwrap();
      dispatch(setIsSubmitted(true));
      if (result.isCorrect) {
        dispatch(setCorrectAnswersCount());
      } else {
        dispatch(setCorrectAnswer(result.correctAnswer));
        dispatch(setWrongAnswersCount());
      }
      setIsCorrect(result?.isCorrect);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const selectedAnswer = watch('answer');

  return (
    <div data-testid='answers' style={{ flex: 1 }}>
      {!isResultsShowing ? (
        <>
          <form onSubmit={handleSubmit(onsubmit)}>
            <Stack spacing={{ base: '3', sm: '6' }} flex={1}>
              <Stack
                key={question?.id}
                style={{
                  opacity: isTransitioning ? 0 : 1, // Fade effect when submitted
                  transition: 'opacity 0.5s ease-in-out', // Smooth transition
                }}
                spacing={{ base: '3', sm: '6' }}
              >
                {answers?.map((option) => (
                  <SingleAnswer
                    key={option.id}
                    id={option.id.toString()}
                    variant={option.variant}
                    value={option.value}
                    isCorrect={option.id === +selectedAnswer && isCorrect}
                    isSelected={option.id === +selectedAnswer}
                    {...register('answer', {
                      required: 'Please select an answer',
                    })}
                  />
                ))}
              </Stack>
              {!isSubmitted && (
                <SubmitButton
                  width='100%'
                  buttonText={'Submit Answer'}
                  type={'submit'}
                  isLoading={isLoading}
                />
              )}
              {errors.answer && (
                <Flex
                  justify={'center'}
                  display={'flex'}
                  align={'center'}
                  gap={2}
                >
                  <Wrong width={iconSize} height={iconSize} />
                  <Text
                    textStyle='bodyM'
                    fontSize={{ base: '18px', sm: '24px' }}
                    color='#EE5454'
                  >
                    {errors?.answer?.message as string}
                  </Text>
                </Flex>
              )}
            </Stack>
          </form>
          {isSubmitted && (
            <SubmitButton
              marginTop={{ base: '3', sm: '6' }}
              width='100%'
              buttonText={
                questions?.length !== currentQuestionIndex + 1
                  ? 'Next Question'
                  : 'Show Results'
              }
              onClick={handleNext}
              type={'button'}
              isLoading={isLoading}
              disabled={isTransitioning}
            />
          )}
        </>
      ) : (
        'results'
      )}
    </div>
  );
};
