import { Greeting } from "./components/greeting";
import { Card } from "./components/card";
import { Cards } from "./components/cards";
import { Person } from "./components/person";
import { Button } from "./components/buttons";
import { DangerButton } from "./components/buttons";
import { TextInput } from "./components/buttons";
import { ProfileImage } from "./components/buttons";
import "./App.css";

function App() {
  return (
    <>
      <Greeting />
      <Card />
      <Cards />
      <Person />
      <Button />
      <DangerButton />
      <TextInput />
      <ProfileImage />
    </>
  );
}

export default App;
