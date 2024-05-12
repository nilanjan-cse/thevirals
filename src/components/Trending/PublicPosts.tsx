import {IconButton, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Avatar from '@mui/material/Avatar';
export interface IPost {
  post: any;
  author: any;
}
function PublicPosts(props: IPost) {
  const { post, author } = props;
  useEffect(() => {
    console.log(`Post: ${post} | Author: ${author}`);
  })

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function CustomAvatar():JSX.Element{
      return <Avatar sx={{bgcolor: stringToColor(author)}} children={`${author.split(' ')[0][0]}${author.split(' ')[1][0]}`}/>
  }
  
  return (
    <Paper elevation={8} sx={{ marginTop: 2, padding: 5, width: '60vw', marginLeft: '20%' }}>
      <Stack direction={"row"} gap={1} sx={{p:2}}>
          <CustomAvatar/> 
          <Typography sx={{lineHeight:'2.5rem', fontSize: '1.1rem'}}>{author}</Typography>
      </Stack>
      <br />
      <Typography paragraph sx={{ textAlign: 'justify',pl:2, pr:2 }}>{post}</Typography>
      <IconButton aria-label="like" sx={{ color: '#F92605',pl:1.5 }}>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton aria-label="comment" sx={{ color: '#F92605' }}>
        <InsertCommentIcon />
      </IconButton>
      <IconButton aria-label="share" sx={{ color: '#F92605' }}>
        <ShareIcon />
      </IconButton>
    </Paper>
  )
}

export default PublicPosts