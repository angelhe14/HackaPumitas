import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

import demoData from '../../assets/demoFiles/demo.json'


export default function BasicCard() {

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your last Trips
        </Typography>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src={demoData.historial.hst0.img1}
              />
            </ListItemAvatar>
            <ListItemText>{demoData.historial.hst0.fecha}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src={demoData.historial.hst1.img3}
              />
            </ListItemAvatar>
            <ListItemText>{demoData.historial.hst1.fecha}</ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}