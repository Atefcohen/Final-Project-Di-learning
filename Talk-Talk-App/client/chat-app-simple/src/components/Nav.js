import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Nav = (props) => {
  return(
    <>
      <Stack spacing={2} direction='row'>
        <Button component={Link} to='/home'>Home</Button>
        <Button component={Link} to='/chat-Room'>Chat-Room</Button>
        <Button component={Link} to='/register'>Register</Button>
        <Button component={Link} to='/login'>Login</Button>
      </Stack>
    </>
  )
}
export default Nav;
