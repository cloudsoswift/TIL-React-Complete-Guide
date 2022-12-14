import React from "react";
import mealsJpg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals! &copy;</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsJpg} alt="A Table Full of Delicious Food !" />
      </div>
    </React.Fragment>
  );
};

export default Header;
