import React from 'react';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { Flex, Stack, Text, Progress, Box } from '@chakra-ui/react';
import { RootState } from '../../../store/store';
import { Answers } from '../Answers/Answers';
import { Result } from '../Result/Result';

import { IQuestion } from '../../../models/interface';

interface IProps {
  questions: IQuestion[];
}

export const Quiz: React.FC<IProps> = ({ questions }) => {
  const {
    currentQuestionIndex,
    correctAnswersCount,
    wrongAnswersCount,
    isResultsShowing,
  } = useSelector((state: RootState) => state.quiz);

  const question = useMemo(() => {
    return questions?.[currentQuestionIndex];
  }, [currentQuestionIndex, questions]);

  const progressBarValue = useMemo(() => {
    return correctAnswersCount === 0 && wrongAnswersCount === 0
      ? 0
      : ((correctAnswersCount + wrongAnswersCount) / questions?.length) * 100;
  }, [correctAnswersCount, wrongAnswersCount, questions?.length]);

  return (
    <Flex
      pt={{ base: 8, sm: 12, md: 16, xl: 0 }}
      flex={{ base: 0, lg: 1 }}
      align='center'
      justify='center'
    >
      <Box flex={1}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 10, md: 16, lg: 0 }}
          justifyContent={'space-between'}
        >
          {!isResultsShowing ? (
            <>
              <Stack gap={{ base: 3, sm: 7 }} flex={1}>
                <Text
                  textColor={'var(--italic-text-color)'}
                  textStyle={'bodyS'}
                  fontSize={{ base: '14px', sm: '20px' }}
                >
                  Question {currentQuestionIndex + 1} of {questions?.length}
                </Text>
                <Text
                  textColor={'var(--heading-text-color)'}
                  textStyle={'headingM'}
                  lineHeight={{ base: '24px', sm: '43px' }}
                  maxW={{ base: '100%', lg: '85%' }}
                  fontSize={{ base: '20px', sm: '36px' }}
                >
                  {question?.question}
                </Text>
                <Progress
                  value={progressBarValue}
                  bg='var(--button-background-color)'
                  maxW={{ base: '100%', lg: '85%' }}
                  display={'flex'}
                  alignItems={'center'}
                  borderRadius={8}
                  height={'16px'}
                  padding={'0px 4px'}
                  marginTop={{ base: '12px', sm: '12px', lg: 'auto' }}
                  marginBottom={{ lg: '96px' }}
                  sx={{
                    '& > div[role="progressbar"]': {
                      backgroundColor: 'var(--toggle-color)',
                      height: '8px',
                    },
                  }}
                />
              </Stack>
              <Answers question={question} answers={question?.options} />
            </>
          ) : (
            <Result />
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
