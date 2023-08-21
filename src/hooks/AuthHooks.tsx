import {Client, Account, ID} from "appwrite"
import api from "../api/api"

export async function handleSignUp(email:string, password:string, name:string){
    try{
        console.log(email)
        


      const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject(process.env.REACT_APP_PROJECT) // Your project ID
    
  
      const account = new Account(client);
  
      // Register User
      const createAccount = await account.create(
          ID.unique(),
          email,
          password,
          name
      )

      console.log(createAccount);

      if(createAccount){
        localStorage.setItem("auth",email);
        window.location.reload();
      }
    }catch(err){
      console.error(err);
    }
  }

  export async function handleLogin(email:string,password:string){
    try{
      await api.createSession(email, password);
      const response = await api.getAccount();
      if(response){
        console.log(response);
        localStorage.setItem("auth",email);
        window.location.reload()
      }
    }catch(err){
      console.error(err);
    }
  }