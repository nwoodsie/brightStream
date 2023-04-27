import React from 'react';
import { useToast } from '@chakra-ui/react';
import Alert from '../../../libs/alert/src';

const useNotification = () => {
  const toast = useToast();

  const showError = (error: string) => {
    if (!toast.isActive(error)) {
      toast({
        id: error,
        duration: 5000,
        isClosable: true,
        position: 'top',
        render: ({ onClose }) => <Alert status="error" message={error} onClose={onClose} />,
      });
    }
  };

  return {
    showError,
  };
};

export default useNotification;
