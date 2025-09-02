import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Card, CardContent } from '@mui/material';
import supabase from '../client.js';

export default function EditCreator({ data }) {
    const { id } = useParams();
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        imageURL: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (data && id) {
            const filtered = data.filter(creator => {
                return creator.id === parseInt(id);
            });
            console.log('Filtered creator for edit:', filtered);
            if (filtered[0]) {
                setCreator({
                    name: filtered[0].name || '',
                    url: filtered[0].url || '',
                    imageURL: filtered[0].imageURL || '',
                    description: filtered[0].description || ''
                });
            }
        }
    }, [data, id]);

    const handleChange = (e) => {
        setCreator({ ...creator, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { data, error } = await supabase
            .from('creators')
            .update(creator)
            .eq('id', parseInt(id));

        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Updated:', data);
            window.location.href = '/';
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Edit Creator
            </Typography>

            <Card sx={{ maxWidth: 600, mx: 'auto' }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            name="name"
                            label="Creator Name"
                            value={creator.name}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="url"
                            label="Creator URL"
                            type="url"
                            value={creator.url}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="imageURL"
                            label="Image URL"
                            type="url"
                            value={creator.imageURL}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="description"
                            label="Description"
                            value={creator.description}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            fullWidth
                            variant="outlined"
                        />

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleSubmit}
                                sx={{ px: 4, py: 1.5 }}
                            >
                                Update Creator
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => navigate('/')}
                                sx={{ px: 4, py: 1.5 }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}