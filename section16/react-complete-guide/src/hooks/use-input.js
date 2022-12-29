import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (prevState, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: prevState.isTouched };
    case "BLUR":
      return { value: prevState.value, isTouched: true };
    case "RESET":
    default:
      return initialInputState;
  }
};

const useInput = (validateValue) => {
  const [inputState, inputDispatcher] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    inputDispatcher({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    // Blur 되었다는건 이전에 Touch 되었다는 것.
    inputDispatcher({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    // setEnteredValue('');
    // setIsTouched(false);
    inputDispatcher({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
