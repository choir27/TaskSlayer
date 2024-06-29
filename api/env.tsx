import React from "react";

//globally accessible env variables
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_PROJECT_ID: string;
      NEXT_PUBLIC_API_KEY: string;
      NEXT_PUBLIC_ENDPOINT: string;
      NEXT_PUBLIC_TODO_DATABASE_ID: string;
      NEXT_PUBLIC_TASKS_COLLECTION_ID: string;
      NEXT_PUBLIC_GAME_DATABASE_ID: string;
      NEXT_PUBLIC_CHARACTERS_COLLECTION_ID: string;
    }
  }
}
