import { Text, Box } from '@chakra-ui/react';

export default function Page() {
  return (
    <Box
      flex={1}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text
        textColor={'var(--heading-text-color)'}
        textStyle={'headingLRegular'}
        fontSize={{ base: '40px', sm: '64px' }}
        align={'center'}
      >
        404 Not found
      </Text>
    </Box>
  );
}
