import { Typography } from '@mui/material'
import Navbar from '../Navbar/Navbar';
function Header() {
  return (
    <div className="App">
      <Typography variant='h3' sx={{color:"#F95305",fontFamily: 'Creepster', fontSize: 100}}>The Virals</Typography>
      <Navbar/>
    </div>
  )
}

export default Header