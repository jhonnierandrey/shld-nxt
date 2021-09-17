import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/img/disney.png';

const Navbar = ({account}) => {
    return (
        <nav className="navbar">
            <div className="logo-wrapper">
                <Link href="/" passHref>
                    <>
                        <Image src={logo} alt="Logo" width={90} height={50} />
                    </>
                </Link>
            </div>
            <div className="nav-menu">
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-house-door-fill"></i> HOME</span>
                </Link>
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-search"></i> SEARCH</span>
                </Link>
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-plus-lg"></i> WATCHLIST</span>
                </Link>
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-star-fill"></i> ORIGINALS</span>
                </Link>
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-film"></i> MOVIES</span>
                </Link>
                <Link href="/" passHref>
                    <span className="nav-menu-item"><i className="bi bi-tv-fill"></i> SERIES</span>
                </Link>
            </div>
            <div className="account-info">
                <p>{account.username}</p>
                <img className="avatar" src={account.avatar.url} alt="" />
            </div>
        </nav>
    )
}

export default Navbar;