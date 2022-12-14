import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid'; // Grid version 1
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import YourTrips from './YourTrips'
import YourPlaces from './YourPlaces'

import demoData from '../../assets/demoFiles/demo.json'

const theme = createTheme();

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  type User = {
    id: number;
    email: string;
    first_name: string;
  };
  
  type GetUsersResponse = {
    data: User[];
  };

  async function getUsers() {
    try {
      // ??????? const response: Response
      const response = await fetch('http://192.168.137.15:8000', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      // ??????? const result: GetUsersResponse
      const result = (await response.json()) as GetUsersResponse;
  
      return JSON.parse(JSON.stringify(result));
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  const generalData = getUsers();

  function getPlaces(gendata: any){
    let content = [<div></div>]

    for (let item in gendata.sites){
      content.push(
        <ListItem>
          <Card sx={{ 
            maxHeight: 350
            }}>
            <CardHeader
              avatar={
                //Inicial del arrendador
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {gendata.sites[item].dueno.substr(0,1)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" href="/Rental">
                  <ArrowForwardIcon/>
                </IconButton>
              }
              title = {gendata.sites[item].titulo} //Titulo Vivienda
              subheader= {gendata.sites[item].precio} //Precio por noche
            />
            <CardMedia
              component="img"
              height="200"
              image= {gendata.sites[item].imagenes.img1}
              alt= {gendata.sites[item].municipio}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {gendata.sites[item].valoraciones.v1}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
          </Card>
        </ListItem>
      );
    }

    return content
  };


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            vSeC Rentals
          </Typography>
          <Search sx={{ flexGrow: 1}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  
      <main>
        <Grid 
          container rowSpacing={1} 
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={8}>
            <Box 
              height={"50px"} 
              width="100%" 
              padding={"15px 15px 15px 15px"}
            >
              <List
                sx={{
                  width: '100%',
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'auto',
                  maxHeight: 600,
                  '& ul': { padding: 0 },
                }}
              >
                {getPlaces(demoData)}
              </List>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box 
              height={"50px"} 
              width="100%" 
              padding={"15px 15px 15px 85px"}
            >
              <Stack spacing={2}>
                <YourTrips/>
                <YourPlaces/>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}