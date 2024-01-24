import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const TestCard = ({test}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={test.title}
        subheader={test.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={test.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {test.content.split(0, 50)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <button className=''>Realizar Test</button>
      </CardActions>
    </Card>
  );
}

export default TestCard 