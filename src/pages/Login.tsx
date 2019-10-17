import React, { useState, useCallback } from "react";
import { Alert, ALERT_LEVEL } from "../components/Alert";
import { UserStorage } from "../database/UserStorage";
import { useHistory } from "react-router";
import { ROUTE } from "../Router";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username.length <= 0 || password.length <= 0) {
        return;
      }
      if (!UserStorage.login(username, password)) {
        setError(true);
        return;
      }
      history.push(ROUTE.REGISTER_DONE);
    },
    [username, password, history]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        {error ? (
          <Alert level={ALERT_LEVEL.WARNING}>
            Error signing in. Either user doesn't exist or password was incorrect
          </Alert>
        ) : null}
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
