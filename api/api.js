import { Client as Appwrite, Databases, Account, Client, Storage} from "appwrite";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT).setProject(process.env.NEXT_PUBLIC_PROJECT);
    const account = new Account(appwrite);
    const database = new Databases(appwrite);
    const client = new Client(appwrite);
    const storage = new Storage(appwrite);
    api.sdk = { database, account, client, storage};
    return api.sdk;
  },
  
  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()", email, password, name);
  },

  updateAccountName: (name) => {
    return api.provider().account.updateName(name)
  },

  updateAccountPassword: (password, oldPassword) => {
    return api.provider().account.updatePassword(password, oldPassword)
  },

  updateAccountEmail: (email, password) => {
    return api.provider().account.updateEmail(email, password)
  },

  getAccount: () => {
    let account = api.provider().account;
    return account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current");
  },

  deleteSessions: ()=> {
    return api.provider().account.deleteSessions();
  },

  createDocument: (databaseId, collectionId, data, permissions) => {
    return api
      .provider()
      .database.createDocument(databaseId, collectionId, 'unique()', data, permissions);
  },

  listDocuments: (databaseId, collectionId) => {
    return api.provider().database.listDocuments(databaseId, collectionId);
  },

  updateDocument: (databaseId, collectionId, documentId, data) => {
    return api.provider().database.updateDocument(databaseId, collectionId, documentId, data);
  },

  deleteDocument: (databaseId, collectionId, documentId) => {
    return api.provider().database.deleteDocument(databaseId, collectionId, documentId);
  },

  uploadFile: (ID, file) => {
    return api.provider().storage.createFile(process.env.NEXT_PUBLIC_APP_SONGS, ID, file)
  },

  listFiles: () =>{
    return api.provider().storage.listFiles(process.env.NEXT_PUBLIC_APP_SONGS)
  }
};

export default api;