import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { Text, Box, Flex, Stack } from '@chakra-ui/react';
import { mockTopics } from '@/constants/topics';
import ListItem from '@/components/Topic/TopicItem';
import SubmitButton from '@/components/SubmitButton/SubmitButton';

import { setSelectedTopic } from '../../domains/topic/slice';
import { resetState } from '../../domains/quiz/slice';
import { RootState } from '../../store/store';

export default function Home() {
  const dispatch = useDispatch();
  const handleTopicChange = (topic: string) => {
    dispatch(setSelectedTopic(topic));
  };
  useEffect(() => {
    dispatch(setSelectedTopic(''));
    dispatch(resetState({ isQuestionsKeeped: false }));
  }, [dispatch]);
  const { selectedTopic } = useSelector((state: RootState) => state.topic);

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
          <Box flex={1}>
            <Text
              textColor={'var(--heading-text-color)'}
              textStyle={'headingLRegular'}
              fontSize={{ base: '40px', sm: '64px' }}
            >
              Welcome to the
            </Text>
            <Text
              mt={2}
              textColor={'var(--heading-text-color)'}
              textStyle={'headingLBold'}
              fontSize={{ base: '40px', sm: '64px' }}
            >
              Frontend Quiz!
            </Text>
            <Text
              mt={{ base: 4, lg: 12 }}
              textColor={'var(--italic-text-color)'}
              textStyle={'bodyS'}
              fontSize={{ base: '14px', sm: '20px' }}
            >
              Pick a subject to get started.
            </Text>
          </Box>
          <Stack spacing={{ base: '3', sm: '6' }} flex={1}>
            {mockTopics.map((topic) => (
              <ListItem
                key={topic.id}
                onClick={() => {
                  handleTopicChange(topic?.text);
                }}
                {...topic}
              />
            ))}

            <Link href={`/quiz/${selectedTopic}`}>
              <SubmitButton
                disabled={!selectedTopic}
                width='100%'
                buttonText='Start quiz'
                type='button'
              />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}
