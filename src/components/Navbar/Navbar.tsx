import { AppBar, Box, Button, CssBaseline, Toolbar } from '@mui/material'
import QueueIcon from '@mui/icons-material/Queue';
import { requestData } from '../../helpers/httprequesthelper';
function Navbar() {
  const navItems = [
    {
      name: "Trending Virals",
      path: '/trending'
    }, 
    { 
      name: 'Your Posts', 
      path: '/your-posts' 
    }
  ];
  async function handleClick(){
      const response = await requestData("GET","https://7f831lrhpe.execute-api.us-east-1.amazonaws.com/staging");
      console.log(response);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ marginTop: 8, backgroundColor: 'white' }} position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft: '10%', } }}>
            {navItems.map((item) => (
              <Button key={item.name} sx={{ color: '#F92605'}} href={item.path}>
                {item.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0.3 }} />
          <Button variant='contained' startIcon={<QueueIcon />} color="error" sx={{ marginLeft: '40%' }} onClick={handleClick}>Create Post</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar