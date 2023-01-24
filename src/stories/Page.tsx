import { useState, VFC } from "react";

import { Header } from "./Header";
import "./page.css";

type User = {
  name: string;
};

export const Page: VFC = () => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section>
        <h2>Pages in Storybook</h2>
      </section>
    </article>
  );
};
