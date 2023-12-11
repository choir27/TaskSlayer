"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../css/global.css";
import "../../css/mediaQuery.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";
import { handleSignUp, handleLogin } from "../../hooks/AuthHooks";
import withNoAuth from "../../middleware/Public";
import SearchResultsDisplay from "../search/page";
import { State, Action } from "../../middleware/Type";
import { useStore } from "../../middleware/Zustand";

const NAME_REGEX = /^[a-zA-Z]*$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;

const Register = () => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [authDisplay, setAuthDisplay] = useState(false);
  const searchDisplay = useStore((state: State) => state.searchDisplay);
  const setSearchDisplay = useStore((state: Action) => state.setSearchDisplay);

  useEffect(() => {
    setSearchDisplay(false);
  }, []);

  const check = <i className="fa-solid fa-check"></i>;
  const cross = <i className="fa-solid fa-xmark"></i>;

  const { push } = useRouter();

  return (
    <>
      {searchDisplay ? (
        <SearchResultsDisplay />
      ) : authDisplay ? (
        <>
          <Header />
          <section id="auth" className="main">
            <h1>Login</h1>
            <form
              className="flex column alignStart"
              method="POST"
              action="#"
              id="login"
            >
              <div className="flex column">
                <label>Email</label>
                <input
                  placeholder="Put your email here"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex column">
                <label>Password</label>
                <input
                  placeholder="Put your password here"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                className="button"
                type="submit"
                value="Login Here"
                onClick={(
                  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
                ) => {
                  e.preventDefault();
                  handleLogin(email, password, push);
                }}
              />

              <section className="existingAccount flex column alignStart">
                <h2>Don't have an account? Register below:</h2>

                <Button
                  className="button"
                  text="Register Here"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => setAuthDisplay(!authDisplay)}
                />
              </section>
            </form>
          </section>

          <Footer />
        </>
      ) : (
        <>
          <Header />
          <section id="auth" className="main">
            <h1>Register Account</h1>

            <section className="authContainer">
              <form>
                <div>
                  <label> Name {name && validName ? check : cross}</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => {
                      setName(e.target.value);
                      setValidName(NAME_REGEX.test(e.target.value));
                    }}
                  />
                </div>

                <div>
                  <label>Email{validEmail && email ? check : cross}</label>

                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setValidEmail(EMAIL_REGEX.test(e.target.value));
                    }}
                  />
                </div>

                <div>
                  <label>
                    Password{validPassword && password ? check : cross}
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Confirm password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setValidPassword(PASSWORD_REGEX.test(e.target.value));
                    }}
                  />
                </div>

                <input
                  className="button"
                  type="submit"
                  value="Register Here"
                  onClick={(
                    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
                  ) => {
                    e.preventDefault();
                    handleSignUp(email, password, name, push);
                  }}
                  disabled={
                    !validEmail || !validName || !validPassword ? true : false
                  }
                />
              </form>

              <section className="existingAccount flex column alignItems">
                <h2>Already have an account? Login below:</h2>

                <Button
                  className="button"
                  text="Login Here"
                  onClick={() => setAuthDisplay(!authDisplay)}
                />
              </section>
            </section>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default withNoAuth(Register);
