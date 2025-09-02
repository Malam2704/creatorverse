import CreatorCard from '../components/CreatorCard';

export default function ShowCreators({ data }) {
    return (
        <div>
            <h1>Show Creators Page</h1>
            {data.map(creator => (
                <CreatorCard key={creator.id} creator={creator}></CreatorCard>
            ))}
        </div>
    );
}