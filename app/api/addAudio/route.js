import { NextResponse } from "next/server";
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export async function POST(req, res) {
    try {
      console.log(req.body);
    //   console.log(req)

      return new Response(req.body)
      await res.status(200).json({
         message: 'Success', // just an example
      });

      return new NextResponse("success")
    } catch (error) {}
  }