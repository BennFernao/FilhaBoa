import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArrowForward, Verified } from '@mui/icons-material';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';


export default function BlogCard({titulo, autor, srcImagem}) {
  return (
    <Card sx={{ width: "100%" , borderRadius: 0}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={srcImagem}
      />
      <CardContent >
        <Box sx={{display:"flex",}}>
            <Typography variant='body1' sx={{my:1, fontWeight: "bold", color:grey[800]}} >
                {autor} a 30 min
            </Typography>
            
        </Box>

        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:"600"}}>
          {titulo}
        </Typography>

      </CardContent>
      <CardActions>

        <Button size="small" endIcon={<ArrowForward />}>Ler Mais</Button>
      </CardActions>
    </Card>
  );
}
