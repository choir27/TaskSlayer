"use client";
import { Button } from "../components/Button";
import api from "../api/api";
import { useState, useContext } from "react";
import { UserContext } from "../middleware/Context";
import { User } from "../middleware/Interface";
// import axios from "axios"

export default function EmployeeSettings() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [display, setDisplay] = useState<string>("");

  const user = useContext(UserContext) as User;

  async function handleChangeEmail() {
    try {
      const data = await api.updateAccountEmail(email, password);

      if (data) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleChangePassword() {
    try {
      const data = await api.updateAccountPassword(newPassword, password);
      if (data) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  // async function handleDeleteAccount(){
  //     try{
  //         const response = await axios.delete(`https://echoverse-backend.onrender.com/deleteAccount/${user.$id}`);
  //         const data = await api.deleteCurrentSession();

  //         sessionStorage.setItem("auth", "");

  //         console.log(response)
  //         if(data && response){
  //             window.location.reload();
  //         }
  //     }catch(err){
  //         console.error(err);
  //     }
  // }

  async function handleChangeName() {
    try {
      const data = await api.updateAccountName(name);
      if (data) {
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  const buttons = (
    <section className="flex column">
      {Button({
        text: "Change Name",
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          setDisplay("name"),
        className: "button small",
      })}

      {Button({
        text: "Change Email",
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          setDisplay("email"),
        className: "button small",
      })}

      {Button({
        text: "Change Password",
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          setDisplay("password"),
        className: "button small",
      })}

      {/* {Button({text: "Delete Account", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> setDisplay("delete"), className: "button small"})} */}
    </section>
  );

  const accountSettings: Record<string, React.JSX.Element> = {
    name: (
      <section className="flex column alignItems">
        <input
          type="text"
          name="name"
          placeholder={user?.name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        {Button({
          text: "Change Name",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleChangeName(),
          className: "button small",
        })}
        {Button({
          text: "Go Back",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setDisplay(""),
          className: "button small",
        })}
      </section>
    ),
    email: (
      <section className="flex column alignItems">
        <input
          type="text"
          placeholder={user?.email}
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Input Password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {Button({
          text: "Change Email",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleChangeEmail(),
          className: "button small",
        })}
        {Button({
          text: "Go Back",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setDisplay(""),
          className: "button small",
        })}
      </section>
    ),
    password: (
      <section className="flex column alignItems">
        <input
          placeholder="Current Password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="New Password"
          type="password"
          name="newPassword"
          id="newPassword"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {Button({
          text: "Change Password",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleChangePassword(),
          className: "button small",
        })}
        {Button({
          text: "Go Back",
          onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setDisplay(""),
          className: "button small",
        })}
      </section>
    ),
    // ,
    // delete: (
    //     <section>
    //         {Button({text: "Delete Account", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleDeleteAccount(), className: "button small"})}
    //         {Button({text: "Go Back", onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> setDisplay(""), className: "button small"})}
    //     </section>
    // )
  };

  return display ? accountSettings[display] : buttons;
}
