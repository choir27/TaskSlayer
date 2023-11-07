import { NextResponse } from "next/server";

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