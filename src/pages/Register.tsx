import React, { useState, useCallback } from "react";
import { Alert, ALERT_LEVEL } from "../components/Alert";
import { UserStorage } from "../database/UserStorage";
import { useHistory } from "react-router";
import { ROUTE } from "../Router";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username.length <= 0 || password.length <= 0) {
        return;
      }
      UserStorage.addUser({ name: username, password: password });
      history.push(ROUTE.REGISTER_DONE);
    },
    [username, password, history]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Alert level={ALERT_LEVEL.WARNING}>
          Everything is stored in the client. So don't use any real information
        </Alert>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
