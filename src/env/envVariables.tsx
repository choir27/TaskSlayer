import React from "react"

declare global {
    namespace NodeJS {
      export interface ProcessEnv {
        REACT_APP_COLLECTION_ID: string;
        REACT_APP_DATABASE_ID: string;
        REACT_APP_SERVICE_COLLECTION_ID: string;
        REACT_APP_PROJECT: string;
        REACT_APP_ECHOVERSE_API_KEY: string;
        REACT_APP_SONGS: string;
        NODE_ENV: "development" | "production";
        PORT?: string;
        PWD: string;
      }
    }
  }
