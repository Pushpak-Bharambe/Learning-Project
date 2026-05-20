import { useState } from "react";

export const useStatus = (initialValue) => {
  const [status, setStatus] = useState(initialValue);

  const isSuccess = status === "Success";
  const isError = status === "Error";
  const isIdle = status === "Idle";

  return { isSuccess, isError, isIdle, setStatus };
};
