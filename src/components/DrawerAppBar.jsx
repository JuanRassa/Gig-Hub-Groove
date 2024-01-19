import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftDrawer from './LeftDrawer';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

function DrawerAppBar() {
  const {
    isLoggedCtx: [isLogged, setIsLogged],
    usernameAuthCtx: [usernameAuth],
    userIdAuthCtx: [userIdAuth],
  } = useContext(LoginContext);

  return (
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon className='menuIcon' />
            <LeftDrawer />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/'>Gig Hub Groove</Link>
          </Typography>

          {!isLogged && <Link to='/login'>Login</Link>}
          {!isLogged && <Link to='/register'>Register</Link>}
          {isLogged && (
            <Link to='my-favorites'>
              Hi {userIdAuth}-{usernameAuth}
            </Link>
          )}
          {isLogged && (
            <Button
              onClick={() => {
                setIsLogged(false);
                window.sessionStorage.setItem('is_logged', false);
                window.sessionStorage.setItem('logged_username', '');
                window.sessionStorage.setItem('logged_id', '');
              }}
              color='inherit'>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default DrawerAppBar;
