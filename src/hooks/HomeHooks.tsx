import React from "react"
import api from "../api/api"

export async function GetMusic(){
    try{
        const data = await api.listFiles();
        console.log(data.files);
    }catch(err){
        console.error(err);
    }
}