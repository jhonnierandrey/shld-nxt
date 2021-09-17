import Link from "next/link";

const NotFound = () => {
    return ( 
        <div id="notfound">
            <div className="container">
                <h1>The page you were looking for cannot be found.</h1>
                <p>Please go to the Disney+ home page by clicking the button below</p>
                <Link href="/" passHref>
                    <button className="primary">Disney+ Home</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;