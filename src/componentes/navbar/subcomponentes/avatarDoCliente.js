"use client"

import { Avatar } from "@mui/material"



export default function AvatarDoCliente({nome}){
    return( 

        <Avatar>
            {nome[0]}
        </Avatar>
    )
}