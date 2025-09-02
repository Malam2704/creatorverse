import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import supabase from '../client.js'

export default function AddCreator() {
    const [newCreator, setNewCreator] = useState({
        name: '',
        url: '',
        imageURL: '',
        description: ''
    });

    const handleChange = (e) => {
        setNewCreator({ ...newCreator, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { data, error } = await supabase.from('creators').insert([newCreator]);
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Added:', data);
            // Reset form
            setCreator({ name: '', url: '', imageURL: '', description: '' });
        }
    };

    return (
        <Paper sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
            <Typography variant="h5" align="center">
                Add New Creator
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="name" label="Creator Name" value={newCreator.name} onChange={handleChange} />
                <TextField name="url" label="Creator URL" type="url" value={newCreator.url} onChange={handleChange} />
                <TextField name="imageURL" label="Image URL" type="url" value={newCreator.imageURL} onChange={handleChange} />
                <TextField name="description" label="Description" value={newCreator.description} onChange={handleChange} />
                <Button variant="contained" size="large" sx={{ mt: 1 }} onClick={handleSubmit}>
                    Add Creator
                </Button>
            </Box>
        </Paper>
    );
}