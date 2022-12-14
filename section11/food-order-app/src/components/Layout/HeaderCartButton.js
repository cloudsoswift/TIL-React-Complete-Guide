import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numOfCartItems = items.reduce((curNum, item)=>{
    return curNum + item.amount;
  }, 0); // (함수, 시작값) 인자로 받음
  // 함수는 (이전까지의 값, 현재 보는 item) 인듯?


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
 
  useEffect(()=>{
    if (items.length === 0) {
      // Cart에 item 하나 이상 있는 경우에만 애니메이션 실행
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton;