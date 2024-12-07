import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Stack, Text, Box, useBreakpointValue } from '@chakra-ui/react';

import SubmitButton from '../SubmitButton/SubmitButton';
import { useGetTopic } from '../../../hooks/useGetTopic';
import { RootState } from '../../../store/store';
import { resetState } from '../../../domains/quiz/slice';

export const Result = () => {
  const dispatch = useDispatch();
  const topic = useGetTopic();
  const iconSize = useBreakpointValue({ base: '28px', sm: '40px' });

  const { correctAnswersCount, questions } = useSelector(
    (state: RootState) => state.quiz,
  );

  return (
    <>
      <Box flex={1}>
        <Text
          textColor={'var(--heading-text-color)'}
          textStyle={'headingLRegular'}
          fontSize={{ base: '40px', sm: '64px' }}
        >
          Quiz completed
        </Text>
        <Text
          mt={2}
          textColor={'var(--heading-text-color)'}
          textStyle={'headingLBold'}
          fontSize={{ base: '40px', sm: '64px' }}
        >
          You scored...
        </Text>
      </Box>
      <Stack spacing={{ base: '3', sm: '6' }} flex={1}>
        <Stack
          width={'100%'}
          borderRadius={{ base: '12px', sm: '24px' }}
          padding={{ base: '32px', sm: '48px' }}
          bgColor={'var(--button-background-color)'}
          gap={{ base: 4, sm: 10 }}
        >
          <Flex align={'center'} justify={'center'} gap={{ base: 4, sm: 6 }}>
            <Box
              w={{ base: '40px', sm: '56px' }}
              h={{ base: '40px', sm: '56px' }}
              bg={topic?.iconBgColor}
              display='flex'
              alignItems='center'
              justifyContent='center'
              borderRadius='8px'
            >
              {topic?.icon?.(iconSize)}
            </Box>
            <Text
              fontSize={{ base: '18px', sm: '28px' }}
              textStyle='headingS'
              textColor={'var(--heading-text-color)'}
            >
              {topic?.text}
            </Text>
          </Flex>
          <Stack gap={4}>
            <Text
              fontSize={{ base: '88px', sm: '144px' }}
              textStyle={'display'}
              textAlign={'center'}
              color={'var(--heading-text-color)'}
            >
              {correctAnswersCount}
            </Text>
            <Text
              textAlign={'center'}
              fontSize={{ base: '18px', sm: '24px' }}
              textStyle={'bodyM'}
              color={'var(--italic-text-color)'}
            >
              out of {questions?.length}
            </Text>
          </Stack>
        </Stack>
        <SubmitButton
          onClick={() => dispatch(resetState({ isQuestionsKeeped: true }))}
          width='100%'
          buttonText='Play again'
          type='button'
        />
      </Stack>
    </>
  );
};
