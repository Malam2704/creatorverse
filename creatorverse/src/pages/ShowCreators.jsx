import { Button, Box, Typography, Container, Card, CardContent } from '@mui/material';
import CreatorCard from '../components/CreatorCard';
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

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3, mb: 4 }}>
                {data.map(creator => (
                    <Card
                        key={creator.id}
                        sx={{
                            position: 'relative',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 4
                            }
                        }}
                        onClick={() => routeChange(creator)}
                    >
                        <CardContent>
                            <CreatorCard creator={creator} />
                        </CardContent>

                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={(e) => handleDelete(creator.id, e)}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                minWidth: 'auto',
                                px: 2
                            }}
                        >
                            Delete
                        </Button>
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