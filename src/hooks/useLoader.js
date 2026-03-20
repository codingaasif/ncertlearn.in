import { useState, useCallback } from 'react';

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading...');

  const startLoading = useCallback((text = 'Loading...') => {
    setIsLoading(true);
    setLoadingText(text);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    loadingText,
    startLoading,
    stopLoading,
    setLoadingText
  };
};

export default useLoader;