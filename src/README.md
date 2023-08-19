# Custom useReducer hook

This is a custom useReducer hook that can be used in React functional components. It takes in two arguments: a `reducerFunction` and an `initialState`. The reducerFunction is a function that takes in the current state and an action, and returns a new state. The initialState is the initial state of the component.

The hook returns an array with two elements: the current state and a dispatch function. The dispatch function takes in an action and updates the state by calling the reducerFunction.

Here's an example of how to use this hook:

```jsx
import { useReducer } from "./useReducer";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```
