import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
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
            navigate('/');
        }
    };

    return (
        <Paper sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
            <Typography variant="h5" align="center">
                Edit Creator
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="name" label="Creator Name" value={creator.name} onChange={handleChange} />
                <TextField name="url" label="Creator URL" type="url" value={creator.url} onChange={handleChange} />
                <TextField name="imageURL" label="Image URL" type="url" value={creator.imageURL} onChange={handleChange} />
                <TextField name="description" label="Description" value={creator.description} onChange={handleChange} />
                <Button variant="contained" size="large" sx={{ mt: 1 }} onClick={handleSubmit}>
                    Update Creator
                </Button>
            </Box>
        </Paper>
    );
}