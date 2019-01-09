import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import CircularPhoto from "../components/CircularPhoto/index";
import NoText from "../components/NoTodos/index";

storiesOf("Button", module).add("with text", () => (
  <Button>Hello Button</Button>
));

storiesOf("Circular Photo", module)
  .add("Blank Photo", () => <CircularPhoto name="Bliss" radius="80" />)
  .add("Real Photo", () => (
    <CircularPhoto
      name="Kanye"
      imageLink="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg/220px-Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg"
      radius="80"
    />
  ));

  storiesOf("No Todos", module)
  .add("No Todos", () => <NoText text="No Todos to complete" />);
