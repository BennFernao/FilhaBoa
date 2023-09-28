import { NextResponse } from "next/server";

import fs from "fs"
import path from "path"

export  async function GET(req, res){

 
 
    const dados =  fs.readFileSync("./src/app/cert/api/cert.pdf", (error, data)=>{

        return data

        
    })

    return new Response(dados)

}