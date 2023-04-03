import { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { datas } from "../data";

export default function Aulas() {
    const match = useResolvedPath("");
    const [url, setUrl] = useState("")

    useEffect(() => {
        const newUrl = match.pathname.slice(-1) === '/' ? match.pathname : match.pathname + '/'
        setUrl(newUrl)
    }, [match]);
    return (
        <div>
            <h1>Aulas</h1>
            <ul>
                {datas.map(aula => 
                    <li key={aula.title}><Link to={`${url}${aula.id}`} className="link">{aula.title}</Link></li>
                )}
            </ul>
        </div>
    );
}