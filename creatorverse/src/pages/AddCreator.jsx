import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Card, CardContent } from '@mui/material';
import supabase from '../client.js';

export default function AddCreator() {
    const [newCreator, setNewCreator] = useState({
        name: '',
        url: '',
        imageURL: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewCreator({ ...newCreator, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { data, error } = await supabase.from('creators').insert([newCreator]);
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Added:', data);
            setNewCreator({ name: '', url: '', imageURL: '', description: '' });
            window.location.href = '/';
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Add New Creator
            </Typography>

            <Card sx={{ maxWidth: 600, mx: 'auto' }}>
                <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            name="name"
                            label="Creator Name"
                            value={newCreator.name}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="url"
                            label="Creator URL"
                            type="url"
                            value={newCreator.url}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="imageURL"
                            label="Image URL"
                            type="url"
                            value={newCreator.imageURL}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            name="description"
                            label="Description"
                            value={newCreator.description}
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
                                Add Creator
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