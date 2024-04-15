import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center p-4 w-full">
            <div className="flex justify-center gap-4">
                <a href="mailto:francoelugo@live.com" className="text-blue-500 hover:text-blue-800">
                    <FaEnvelope className="inline-block" /> francoelugo@live.com
                </a>
                <a href="https://www.linkedin.com/in/francoelugo/" className="text-blue-500 hover:text-blue-800">
                    <FaLinkedinIn className="inline-block" /> francoelugo
                </a>
                <a href="https://www.instagram.com/francoelugo/" className="text-blue-500 hover:text-blue-800">
                    <FaInstagram className="inline-block" /> francoelugo
                </a>
                <a href="https://github.com/Peco1503" className="text-blue-500 hover:text-blue-800">
                    <FaGithub className="inline-block" /> Peco1503
                </a>
            </div>
        </footer>
    )

}

export default Footer;