import { Fragment } from 'react';
import { useSelector } from "react-redux";
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
function App() {
  const isLogin = useSelector((state)=>state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isLogin ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
