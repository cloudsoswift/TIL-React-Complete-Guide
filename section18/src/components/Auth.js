import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const dispatcher = useDispatch();
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    dispatcher(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
