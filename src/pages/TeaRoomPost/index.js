import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { differenceInDays } from "date-fns";
import { api } from "../../api/api";

export function TeaRoomPost() {
  const { id } = useParams();
  const [post, setPost] = useState({
    owner: "",
    title: "",
    body: "",
    picture: "",
    tag: ""
  });

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/tea-room/post/${id}`);

        setPost(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar>
              {post.avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={post.title}
          subheader={differenceInDays(
            new Date(Date.now()),
            new Date(post.createdAt)
          )}
          days ago
        />
        <CardMedia
          component="img"
          height="194"
          picture={post.picture}
          alt={post.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

        </CardActions>


      </Card>
    </div>
  );
}
