import { Button, Box, Typography, Container, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import supabase from '../client.js';

export default function ShowCreators({ data }) {
    let navigate = useNavigate();

    const routeChange = (creator) => {
        let path = `/view/${creator.id}`;
        navigate(path);
    }

    const handleDelete = async (creatorId, e) => {
        e.stopPropagation();
        const { data, error } = await supabase
            .from('creators')
            .delete()
            .eq('id', creatorId);

        if (error) {
            console.error('Error deleting:', error);
        } else {
            console.log('Deleted:', data);
            window.location.reload();
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Content Creators
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))', gap: 3, mb: 4 }}>
                {data.map(creator => (
                    <Card key={creator.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={creator.imageURL}
                            alt={creator.name}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => routeChange(creator)}
                        />
                        <CardContent sx={{ cursor: 'pointer' }} onClick={() => routeChange(creator)}>
                            <Typography gutterBottom variant="h5" component="div">
                                {creator.name}
                            </Typography>
                            <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                                {creator.url}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {creator.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => routeChange(creator)}
                            >
                                View
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                onClick={(e) => handleDelete(creator.id, e)}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/add')}
                    sx={{ px: 4, py: 1.5 }}
                >
                    Create New Creator
                </Button>
            </Box>
        </Container>
    );
}