"use client"
import React, {useEffect} from "react"
import {useStore} from "../middleware/Zustand"
import Script from "next/script"
import {Action} from "../middleware/Type"
import {GetMusic} from "../hooks/RenderMusicList"
import {GetPlaylist} from "../components/PlaylistHub"
import Context from "../middleware/Context"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const setSong = useStore((state: Action)=>state.setSong);
    const setListOfSongs = useStore((state: Action)=>state.setListOfSongs);

    useEffect(()=>{
        GetMusic((e)=>setSong(e));
        GetPlaylist((e)=>setListOfSongs(e))
    },[])


    return (
      <html lang="en">
        <title>EchoStream</title>
        <Script rel = "preload" src="https://kit.fontawesome.com/d0e0071c1c.js" crossOrigin="anonymous"/>
        <Context>
        <body>{children}</body>
        </Context>
      </html>
    )
  }