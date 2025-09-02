import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ViewCreator({ data }) {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

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
        </div>
    );
}