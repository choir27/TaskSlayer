import { NextResponse } from "next/server";
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(cors({
  origin: [process.env.API_PORT_URL],
  methods: "GET, POST, PUT, DELETE, OPTIONS"
}));

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