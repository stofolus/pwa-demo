import React, { useContext } from "react";
import { ApplicationContext } from "../App";
import { Link } from "react-router-dom";
import { ROUTE } from "../Router";
import { WebAuth } from "../webauth/WebAuth";
import { User } from "../database/UserStorage";

export function Home() {
  const context = useContext(ApplicationContext);

  if (!context.state.user) {
    return (
      <div>
        <div>Welcome home!</div>
        <div>
          <Link to={ROUTE.LOGIN}>Login</Link>
        </div>
        <div>
          <Link to={ROUTE.REGISTER}>Register</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {context.state.user.name}</h1>
      <div>
        <button type="button" onClick={() => WebAuth.create(context.state.user || {} as User)}>Create WebAuth signin stuff</button>
      </div>
    </div>
  );
}
