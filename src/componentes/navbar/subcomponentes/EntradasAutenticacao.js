import { Person } from "@mui/icons-material"
import { Button, Box, Avatar } from "@mui/material"

export function EntradaParaAuntenticacao(){

    return(
    <Box sx={{ flexGrow: 0, display:{xs :"none", lg:"flex", } }}>
        <Button variant="contained"  sx={{mx:2, borderRadius:3}} href="/login" startIcon={<Person />}>
            Inscrever-se
        </Button>
    </Box>
    )
}


export function AvatarDoCliente({nome}){

   

    return( 

        <Avatar>
            {nome[0]}
        </Avatar>

    )
}