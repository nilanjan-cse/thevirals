import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import PublicPosts, { IPost } from './PublicPosts'
import { requestData } from '../../helpers/httprequesthelper'

function TrendingPosts() {
  const [data, setData] = useState<IPost[]>([]);
  const [initialized, setInitialized] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const response = await requestData("GET", "https://thevirals.free.beeceptor.com/trending");
      if (response?.data) {
        console.log(response.data)
        setData(response?.data||[]);
      }
      setInitialized(false);
    })()
  }, [])
  return (
    initialized ?
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={initialized}
      >
        <CircularProgress color="inherit" />
      </Backdrop> :
      <Box>
        <Typography variant='h5' sx={{ marginTop: 3, marginLeft: 8, color: 'GrayText' }}>Today's trending </Typography>
        {
          data?.map((item: IPost) => (
            <PublicPosts post={item.post} author={item.author}/>
            // <p>{item.author}</p>
          ))
         
        }
      </Box>
  )
}

export default TrendingPosts