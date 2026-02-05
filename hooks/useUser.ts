import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export const useUser = () => {
  const { data, error, mutate } = useSWR("/users/me", fetcher, {
    revalidateOnFocus: true,
  });

  return {
    user: data,
    loading: !error && !data,
    error,
    mutate,
  };
};
