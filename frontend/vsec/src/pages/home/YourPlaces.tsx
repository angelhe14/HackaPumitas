import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import nodata from '../../assets/images/nodata-found.jpg'



export default function BasicCard() {
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Venues
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="350"
        image = {nodata}
        />
    </Card>
  );
}