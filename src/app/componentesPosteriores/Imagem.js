import Image from "next/image"
import {Box} from  "@mui/material"

export function Imagem({src}){

    return(
      <>
      <Box   sx={{display:"flex", justifyContent:"center", alignItems:"center", padding:{xs: 4, lg:0} }}>
        <Image width={680} height={640}  src={src} style={{objectFit:"cover", borderRadius:3, maxWidth:"100%"}} />
      </Box> 
  
  
      </>
    )
  }