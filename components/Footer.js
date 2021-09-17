import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/img/disney.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="disney-footer">
                <Link href="/" passHref>
                    <>
                        <Image src={logo} alt="Logo" width={90} height={50} />
                    </>
                </Link>
                <ul className="footer-menu">
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Subscriber Agreement</a>
                    </li>
                    <li>
                        <a href="#">Cancel Subscription</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                </ul>
                <ul className="footer-menu">
                    <li>
                        <a href="#">Supported Devices</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Interest-based Ads</a>
                    </li>
                </ul>
            </div>
            <ul className="footer-copyright">
                <li>&copy; 2021 <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a></li>
                <li>Made with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a> + <a href="https://graphcms.com/" target="_blank" rel="noopener noreferrer"> GraphCMS</a> + <a href="https://github.com/jhonnierandrey/shld-nxt" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
                <li><a href="https://www.buymeacoffee.com/jhonnierandrey" target="_blank" rel="noopener noreferrer">BuyMeACoffee <i className="bi bi-arrow-up-right-circle-fill"></i></a></li>
            </ul>
        </footer>
    );
}
 
export default Footer;