import styles from './header.module.css';

const Header = () => {
    return (
        <>
            <header className={styles.headerMain}>
                <img src="./letterboxd-icon.png" alt="icon" />
                <h1>Boxedletter</h1>
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
                <form action="/search" method="GET">
                    <input name='query' type="text" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="8" cy="8" r="6" />
                        <line x1="15" y1="15" x2="11.5" y2="11.5" />
                    </svg>

                </form>
            </header>
        </>
    );
}

export default Header;