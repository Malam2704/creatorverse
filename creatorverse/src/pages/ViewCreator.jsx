import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';

export default function ViewCreator({ data }) {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            const filtered = data.filter(creator => {
                return creator.id === parseInt(id);
            });
            setCreator(filtered[0] || null);
        }
    }, [data, id]);

    if (!creator) {
        return (
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Typography variant="h5" align="center">Loading...</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Card sx={{ maxWidth: 800, mx: 'auto', overflow: 'visible' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={creator.imageURL}
                    alt={creator.name}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                        {creator.name}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <Chip
                            label={creator.url}
                            variant="outlined"
                            color="primary"
                            clickable
                            onClick={() => window.open(creator.url, '_blank')}
                            sx={{ fontSize: '1rem', py: 2, px: 1 }}
                        />
                    </Box>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            textAlign: 'center',
                            color: 'text.secondary',
                            mb: 4
                        }}
                    >
                        {creator.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate(`/edit/${id}`)}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Edit Creator
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate(`/`)}
                            sx={{ px: 4, py: 1.5 }}
                        >
                            Go Back
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}