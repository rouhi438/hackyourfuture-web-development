import "./App.css";
import { ClickCounter } from "./components/ClickCounter";
import { SimpleForm } from "./components/SimpleForm";
import { TodoList } from "./components/TodoList";
import { Clock } from "./components/Clock";
import { DataFetcher } from "./components/DataFetcher";
import { WindowResizer } from "./components/WindowResizer";

function App() {
  return (
    <>
      <ClickCounter />
      <hr />
      <SimpleForm />
      <hr />
      <TodoList /> <hr />
      <Clock /> <hr />
      <DataFetcher /> <hr />
      <WindowResizer />
    </>
  );
}

export default App;
