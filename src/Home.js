import React, { useContext } from "react";

import { UserContext } from "./UserContext";
import { login } from "./utils/login";

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {!user ? (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      ) : (
        <button
          onClick={async () => {
            // const user = await login();
            setUser(null);
          }}
        >
          logout
        </button>
      )}
    </div>
  );
}
