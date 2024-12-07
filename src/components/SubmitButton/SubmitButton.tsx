import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';

interface IProps extends ButtonProps {
  buttonText: string;
  width?: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
  type: 'button' | 'reset' | 'submit' | undefined;
}

const SubmitButton: React.FC<IProps> = ({
  buttonText,
  width,
  disabled = false,
  onClick,
  isLoading,
  type,
  ...rest
}) => {
  return (
    <Button
      fontSize={{ base: '18px', sm: '28px' }}
      textStyle='headingS'
      textColor={'#FFFFFF'}
      backgroundColor={'var(--toggle-color)'}
      fontWeight={'500'}
      borderRadius={{ base: 12, sm: 24 }}
      py={{ base: 7, sm: 10, md: 12 }}
      _hover={{ opacity: '50%' }}
      _active={{ background: 'var(--toggle-color)' }}
      width={width}
      disabled={disabled}
      onClick={onClick}
      isLoading={isLoading}
      type={type}
      {...rest}
    >
      {buttonText}
    </Button>
  );
};

export default SubmitButton;
