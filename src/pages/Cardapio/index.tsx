import style from './cardapio.module.scss'
import logo from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio(){
    const [search, setSearch] = useState('');

    return(
        <main>
            <nav className={style.menu}>
                <img src={logo} alt='logo aluroni'></img>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador 
                search={search} 
                setSearch={setSearch}
                />
                <div className={style.cardapio__filtros}>

                </div>
            </section>
        </main>
    )
}