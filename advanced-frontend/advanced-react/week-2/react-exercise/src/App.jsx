import { Button } from "./components/Button";
import { Card } from "./components/Cards";
import image from "./assets/react.svg";
import { Layout } from "./components/Layout";
import { ToggleContent } from "./components/ToggleContent";
import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const clickFunction = () => {
    const span = document.createElement("span");
    span.textContent = "Button Clicked";
    document.body.appendChild(span);
  };
  return (
    <>
      <Button onClick={clickFunction} text="Click Here"></Button>
      <Card
        title={"React Logo"}
        description={
          " React is a popular open-source JavaScript library developed by particularly for single-page applications."
        }
        imageUrl={image}
      />
      <Layout>
        <h1>HomePage</h1>
        <p>Welcome to my website </p>
      </Layout>
      <ToggleContent show={false} content={"your code is work!"} />
      <Counter />
    </>
  );
}

export default App;
