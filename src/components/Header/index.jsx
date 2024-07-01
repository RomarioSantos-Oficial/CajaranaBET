import React from "react";
import Logo from "../../assets/Logotranspa.png";
import styles from "./Header.module.css";
import { IoGiftOutline, IoSearchSharp } from "react-icons/io5";
import { GoGear } from "react-icons/go";

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src={Logo} alt="Logo do site de aposta" />
            </div>
            <nav className={styles.home}>
                <a href="#">APOSTAS ESPORTIVAS</a>
                <a href="#">CASSINO</a>
                <a href="#">FANTASY</a>
                <a href="#">VIRTUAIS</a>
            </nav>
            <div className={styles.buscar1}>
                <div className={styles.icons}>
                    <IoGiftOutline className={styles.icon} />
                    <GoGear className={styles.icon} />
                </div>
                <div className={styles.buttonsHome}>
                    <button className={styles.registar}>Registra-se</button>
                    <button className={styles.entrar}>Entrar</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
