
import { useEffect, useState } from "react";
import { useLocation, useParams, useResolvedPath } from "react-router";
import { datas } from "../data";

// custom hook
function useAula() {
    const id =useParams().id;
    return datas.filter(aula => aula.id == id)[0]
}

export default function Aula() {
    // const match = useResolvedPath("");
    // ?src=youtube
    // const location = useLocation()
    const aula = useAula()
    return (
        <div>
            <>
                <h1>{aula.title}</h1>
                <h3>{aula.desc}</h3>
            </>
        </div>
    );
}