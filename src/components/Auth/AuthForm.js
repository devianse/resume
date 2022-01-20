import classes from "./AuthForm.module.css";
import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import key from "../../env_var";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validation ?

    setIsLoading(true);

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/resume");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Login</button>}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
