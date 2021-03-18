import { useEffect, useState } from "react";
const useHttpErrorHandler = (httpClient) => {
  const [error, setError] = useState(null);

  const reqInterceptors = httpClient.interceptors.request.use((request) => {
    setError(null);
    return request;
  });
  const resInterceptors = httpClient.interceptors.response.use(
    (response) => response,
    (err) => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptors);
      httpClient.interceptors.response.eject(resInterceptors);
    };
  }, [
    httpClient.interceptors.request,
    httpClient.interceptors.response,
    reqInterceptors,
    resInterceptors,
  ]);

  const errorConfirmedHandler = () => {
    setError(null);
  };
  return [error, errorConfirmedHandler];
};
export default useHttpErrorHandler;
