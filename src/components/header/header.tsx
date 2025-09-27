import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <header id={styles.headerMain}>
                <img src="./letterboxd-icon.png" alt="icon" />
                <h1>Letterboxd</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="">
                                SIGN IN
                            </a>
                        </li>
                        <li>
                            <a href="">
                                CREATE ACCOUNT
                            </a>
                        </li>
                        <li>
                            <a href="">
                                FILMS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                LISTS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                MEMBERS
                            </a>
                        </li>
                        <li>
                            <a href="">
                                JOURNAL
                            </a>
                        </li>
                    </ul>
                </nav>
                <form action="">
                    <input type="text" />
                </form>
            </header>
        </>
    );
}

export default Header;