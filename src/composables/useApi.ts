import { useLocale } from "./useLocale";

export const useApi: typeof useFetch = (request, opts) => {
  const config = useRuntimeConfig();

  const locale = useLocale();

  return useFetch(request, {
    baseURL: `${config.public.baseURL}/api`,
    headers: {
      Authorization: config.public.apiToken || "",
    },
    query: { locale: locale.value },
    ...opts,
  });
};
