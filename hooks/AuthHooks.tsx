import { Client, Account, ID } from "appwrite";
import api from "../api/api";

export async function handleSignUp(
  email: string,
  password: string,
  name: string,
  push: (e: string) => void,
) {
  try {
    const client = new Client();

    const account = new Account(client);

    const project: string = process.env.NEXT_PUBLIC_PROJECT as string;

    client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject(project); // Your project ID

    // Register User
    await account.create(ID.unique(), email, password, name);
    sessionStorage.setItem("auth", email);
    await api.createSession(email, password);

    push("/");
  } catch (err) {
    console.error(err);
  }
}

export async function handleLogin(
  email: string,
  password: string,
  push: (e: string) => void,
) {
  try {
    await api.createSession(email, password);
    sessionStorage.setItem("auth", email);
    push("/");
  } catch (err) {
    console.error(err);
  }
}
