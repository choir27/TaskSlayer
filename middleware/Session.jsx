"use client"
import { useState, useEffect } from "react";

export default function useSessionStorage(name){
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue(sessionStorage.getItem(name))
  }, [])

  return value
}