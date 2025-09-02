import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CreatorCard({ creator }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={creator.imageURL}
                    alt={creator.name}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {creator.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {creator.url}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {creator.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}