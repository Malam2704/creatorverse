import Button from '@mui/material/Button';
import CreatorCard from '../components/CreatorCard';
import { useNavigate } from 'react-router-dom';

export default function ShowCreators({ data }) {
    let navigate = useNavigate();

    const routeChange = (creator) => {
        let path = `/view/${creator.id}`;
        navigate(path);
    }

    return (
        <div>
            <h1>Show Creators Page</h1>
            {data.map(creator => (
                <div key={creator.id} onClick={() => routeChange(creator)}>
                    <CreatorCard creator={creator}></CreatorCard>
                </div>
            ))}
        </div>
    );
}