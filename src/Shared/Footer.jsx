import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="m-4 ">
            <footer className="footer footer-center p-10 bg-neutral text-neutral-content rounded">
                <nav className="grid grid-flow-col gap-6">
                    <a className="link link-hover">About us</a>
                    <Link to='/contact'> <a className="link link-hover">Contact</a></Link>
                    <a className="link link-hover">Complain</a>
                    <a className="link link-hover">Photo</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6 text-2xl">
                        <a><MdOutlineEmail /></a>
                        <a><FaFacebookSquare /></a>
                        <a><RxTwitterLogo /></a>
                        <a><FaInstagram /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Dr. Qudrat e khuda Hall</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;