import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

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
    }, []);

    return (
        <div>
            <h1>{creator?.name}</h1>
            <img src={creator?.imageURL} alt={creator?.name} />
            <p>{creator?.description}</p>
            <Button variant="contained" onClick={() => navigate(`/edit/${id}`)}>
                Edit Creator
            </Button>
            <Button variant="contained" onClick={() => navigate(`/`)}>
                Go Back
            </Button>
        </div>
    );
}