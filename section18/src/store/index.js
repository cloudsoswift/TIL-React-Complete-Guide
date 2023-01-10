// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state, action) {
//       console.log(action);
//       state.counter += action.payload.value;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     }
//   }
// })

// const counterReducer = (state = initialState, action) => {
//   if(action.type  === 'increment') {
//     return {
//       ...state,
//       counter: state.counter + action.value,
//     }
//   }
//   if(action.type === 'decrement') {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     }
//   }
//   if(action.type === 'toggle') {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     }
//   }

//   return state;
// }

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
