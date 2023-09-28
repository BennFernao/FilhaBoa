import {Grid, Typography} from "@mui/material"
import { grey } from "@mui/material/colors"


export default function HeaderUm({titulo, descricao}){

    return(

    <Grid container bgcolor="#000" sx={{height:400, mt:4, justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
        <Typography variant='h3' color="white.main" sx={{fontWeight:"bold"}}>{titulo}</Typography>
        <Typography variant='body1' color={grey[500]} sx={{fontWeight:"bold"}}>
            {descricao}
        </Typography>
      </Grid>
    )
}