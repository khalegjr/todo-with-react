import { useState } from "react";
import { Container, Header, Wrapper } from "./App.styles";
import { AddItem } from "./components/AddItem";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comparar um pudim na padaria", done: true },
    { id: 2, name: "Comparar o pão na padaria", done: true },
    { id: 3, name: "Comparar um bolo na padaria", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];

    newList.map((e) => {
      if (e.id === id) {
        e.done = done;
      }
    });

    setList(newList);
  };

  return (
    <Container>
      <Wrapper>
        <Header>Lista de Tarefas</Header>

        <AddItem onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default App;
