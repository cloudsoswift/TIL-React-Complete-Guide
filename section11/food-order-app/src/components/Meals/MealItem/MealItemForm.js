import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true); 

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // input type이 number여도 여기 들어오는 값은 항상 String
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)  {
      // 값이 입력되지 않은 경우 or 입력된 값이 1보다 작거나 5보다 큰 경우
      // => input 값이 Valid 하지 않은 경우
      setAmountIsValid(false);
      return; 
    }

    props.onAddToCart(enteredAmountNumber); 
    // 추가하는 작업은 여기가 아닌 부모에서 다룸. 왜냐면 해당 Item에 대한 정보를 여기서 안 갖고 있어서.
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
