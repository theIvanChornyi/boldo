import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import emailHttpService from '../../shared/services/email-http.service';

interface IUseSubscribe {
  isLoading: boolean;
  handleSubscribe: (email: string) => void;
}

export const useSubscribe = (): IUseSubscribe => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleSubscribe = useCallback(async (email: string): Promise<void> => {
    setIsloading(true);
    try {
      await emailHttpService.subscribe(email);
      toast.success('Now you are subscriber!');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsloading(false);
    }
  }, []);

  return {
    handleSubscribe,
    isLoading,
  };
};
