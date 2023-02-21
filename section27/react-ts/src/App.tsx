import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';

function App() {

  return (
    <TodosContextProvider>
      <TodoInput/>
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
