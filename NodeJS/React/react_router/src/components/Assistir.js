import { useLocation } from "react-router";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export default function Assistir(props) {

    const query = useQuery();

    return (
        <div className="page">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${query.get('v')}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            {
            /*
                http://localhost:3000/assistir?v=tKmjHGUOHug
                return jkl 
            */
            }
        </div>
    )
}