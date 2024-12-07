import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { InputHTMLAttributes, Ref, forwardRef } from 'react';

import { Correct } from '@/components/SvgComponents/Correct';
import { Wrong } from '@/components/SvgComponents/Wrong';

import { RootState } from '../../../../store/store';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isCorrect?: boolean;
  id: string;
  isSelected: boolean;
  variant: string;
}

const SingleAnswer: React.FC<IProps> = forwardRef(
  (
    { id, value, variant, isCorrect, isSelected, ...rest },
    ref: Ref<HTMLInputElement>,
  ) => {
    const { isSubmitted, correctAnswer } = useSelector(
      (state: RootState) => state.quiz,
    );

    const iconSize = useBreakpointValue({ base: '24px', sm: '30px' });

    const getBorder = () => {
      if (isSubmitted && isSelected) {
        if (isCorrect) return 'solid 3px #26D782';
        return 'solid 3px #EE5454';
      }
      return isSelected
        ? 'solid 3px var(--toggle-color)'
        : 'solid 3px transparent';
    };

    const getIcon = (): React.ReactNode => {
      if (isSubmitted) {
        if (isSelected) {
          if (isCorrect) return <Correct width={iconSize} height={iconSize} />;
          return <Wrong width={iconSize} height={iconSize} />;
        }
        if (+id === +correctAnswer) {
          return <Correct width={iconSize} height={iconSize} />;
        }
      }
      return null;
    };

    const getBgColor = () => {
      if (isSubmitted && isSelected) {
        if (isCorrect) return '#26D782';
        return '#EE5454';
      }
      return !isSelected ? '#F4F6FA' : 'var(--toggle-color)';
    };

    return (
      <label>
        <Flex
          align={'center'}
          key={id}
          gap={{ base: 4, sm: 8 }}
          bg={'var(--button-background-color)'}
          p={{ base: 3, md: '4.5' }}
          borderRadius={{ base: 12, sm: 24 }}
          height='max-content'
          boxShadow={'var(--button-shadow)'}
          cursor={isSubmitted ? 'not-allowed' : 'pointer'}
          border={getBorder()}
          _hover={
            isSelected || isSubmitted
              ? {}
              : {
                  border: 'solid 3px var(--toggle-color)',
                  '& .hover-bg': {
                    bg: '#F6E7FF',
                  },
                  '& .hover-text': {
                    color: 'var(--toggle-color)',
                  },
                }
          }
          // border={
          //   selectedTopic === text
          //     ? 'solid 3px var(--toggle-color)'
          //     : 'solid 3px transparent'
          // }
        >
          <Box
            w={{ base: '40px', sm: '56px' }}
            h={{ base: '40px', sm: '56px' }}
            bg={getBgColor()}
            display='flex'
            alignItems='center'
            justifyContent='center'
            borderRadius='8px'
            className='hover-bg'
          >
            <Text
              fontSize={{ base: '18px', sm: '28px' }}
              textStyle='headingS'
              textColor={!isSelected ? '#626C7F' : '#FFFFFF'}
              className='hover-text'
            >
              {variant}
            </Text>
          </Box>
          <Text
            fontSize={{ base: '18px', sm: '28px' }}
            textStyle='headingS'
            textColor={'var(--button-text-color)'}
            flex={1}
          >
            {value}
          </Text>
          <Box>{getIcon()}</Box>
          <input
            type='radio'
            hidden
            value={+id}
            ref={ref}
            {...rest}
            disabled={isSubmitted}
          />
        </Flex>
      </label>
    );
  },
);
SingleAnswer.displayName = 'SingleAnswer';

export default SingleAnswer;
