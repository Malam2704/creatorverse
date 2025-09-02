import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function CreatorCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="imageURL"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Name
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        URL
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Description
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}