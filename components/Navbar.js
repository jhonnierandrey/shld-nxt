import Link from 'next/Link';
import Image from 'next/Image';
import logo from '../public/img/disney.png';

const Navbar = ({account}) => {
    return (
        <nav className="navbar">
            <div className="logo-wrapper">
                <Link href="/">
                    <Image src={logo} alt="Logo" width={90} height={50} />
                </Link>
            </div>
            <div className="account-info">
                <p>Welcome: {account.username}</p>
                <img className="avatar" src={account.avatar.url} />
            </div>
        </nav>
    )
}

export default Navbar;