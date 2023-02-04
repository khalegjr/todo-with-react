import { useState } from "react";
import { Item } from "../../types/Item";
import { Container } from "./styles";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleOnChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(e.target.checked);

    onChange(item.id, !item.done);
  };

  return (
    <Container done={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
      <label>{item.name}</label>
    </Container>
  );
};
