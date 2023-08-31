import {Link} from 'react-router-dom'
import {Card, CardActionArea, CardContent, CardMedia, Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

export interface Props {
  url: string
  image: string
  title: string
  description: string
}

export const ShortcutCard = ({url, image, title, description}: Props) => {
  return (

    <Grid item xs={12} sm={6} md={6}>
      <Link to={url} style={{textDecoration: 'none'}}>
        <Card sx={{margin: 5}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              sx={{objectFit: 'contain'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  )
}