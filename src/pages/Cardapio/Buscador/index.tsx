import React from "react"
import style from './buscador.module.scss'
import { CgSearch } from 'react-icons/cg';

interface Props{
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({search, setSearch}: Props){
    return(
        <div className={style.buscador}>
            <input
                value={search}
                onChange={evento => setSearch(evento.target.value)}
                placeholder='Buscar'
            />
            <CgSearch
                size={20}
                color="#4C4D5E"
            />
        </div>
    )
}