import { useCallback, useState } from "react";

export const useReducer = (reducerFunction, intialState) => {
  const [state, setState] = useState(() => intialState);

  const dispatch = useCallback(
    (action) => {
      const updateState = reducerFunction(state, action);
      setState(updateState);
    },
    [state, reducerFunction]
  );

  return [state, dispatch];
};
