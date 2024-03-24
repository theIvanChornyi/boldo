import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import blogHttpService from '../../shared/services/blog-http.service';

interface IUsePost<T> {
  posts: Array<T>;
  nextPage: () => void;
  page: number;
  isLoading: boolean;
}

export const usePosts = <T>(initialValue: Array<T>): IUsePost<T> => {
  const [posts, setPosts] = useState<Array<T>>(initialValue);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const getData = async (): Promise<void> => {
    setIsloading(true);
    try {
      const { data } = await blogHttpService.getPosts<T>(page);
      setPosts(p => p.concat(data));
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    if (page) {
      getData();
    }
  }, [page]);

  const nextPage = useCallback((): void => {
    setPage(p => p + 1);
  }, []);

  return {
    posts,
    nextPage,
    page,
    isLoading,
  };
};
