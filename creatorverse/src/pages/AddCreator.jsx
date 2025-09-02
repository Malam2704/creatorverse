import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

export default function AddCreator() {
    return (
        <Paper sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
            <Typography variant="h5" align="center">
                Add New Creator
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField name="name" label="Creator Name" />
                <TextField name="url" label="Creator URL" type="url" />
                <TextField name="imageURL" label="Image URL" type="url" />
                <TextField name="description" label="Description" />
                <Button variant="contained" size="large" sx={{ mt: 1 }}>
                    Add Creator
                </Button>
            </Box>
        </Paper>
    );
}