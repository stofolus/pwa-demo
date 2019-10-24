import React, { useState, useCallback, useContext } from "react";
import { Alert, ALERT_LEVEL } from "../components/Alert";
import { UserStorage } from "../database/UserStorage";
import { useHistory } from "react-router";
import { ROUTE } from "../Router";
import { ApplicationContext } from "../App";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const context = useContext(ApplicationContext);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (username.length <= 0 || password.length <= 0) {
        return;
      }
      const user = UserStorage.login(username, password);
      if (!user) {
        setError(true);
        return;
      }
      context.setState({...context.state, user: user});
      history.push(ROUTE.HOME);
    },
    [username, password, history, context]
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
