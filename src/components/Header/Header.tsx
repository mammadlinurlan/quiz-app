'use client';
import { usePathname } from 'next/navigation';
import { useBreakpointValue, Flex, Box, Text } from '@chakra-ui/react';

import { useGetTopic } from '../../../hooks/useGetTopic';
import DayNightSwitch from '../DayNightSwitch/DayNightSwitch';

export const Header = () => {
  const pathName = usePathname();
  const topic = useGetTopic();

  const isQuizPage = pathName.includes('quiz');
  const iconSize = useBreakpointValue({ base: '28px', sm: '40px' });
  return (
    <Flex
      justifyContent={isQuizPage ? 'space-between' : 'flex-end'}
      align={'center'}
      pt={{ base: 4, sm: 6, md: 10, xl: 16, lg: 24 }}
      pb={{ base: 4, sm: 0 }}
    >
      {isQuizPage && (
        <Flex align={'center'} gap={{ base: 4, sm: 6 }}>
          {' '}
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
      )}
      <DayNightSwitch />
    </Flex>
  );
};
