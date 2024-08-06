import { account, ID } from "./config";

export async function getAccount() {
  try {
    return await account.get();
  } catch (err) {
    throw new Error(`Error getting account, ${err}`);
  }
}

export async function register({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  try {
    await account.create(ID.unique(), email, password, name);

    login({ email, password });
  } catch (err) {
    throw new Error(`Error registering account, ${err}`);
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await account.createEmailPasswordSession(email, password);
  } catch (err) {
    throw new Error(`Error logging in account, ${err}`);
  }
}

export async function logout() {
  try {
    await account.deleteSessions();
  } catch (err) {
    throw new Error(`Error logging out account, ${err}`);
  }
}
