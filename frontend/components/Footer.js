import Image from "next/image";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2>Sledujte nás</h2>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/">
                        <span>
                            <Image src="/logo-facebook.svg" alt="Facebook" width={30} height={30} />
                        </span>
                        <span>
                            Facebook
                        </span>
                    </a>
                    <a href="https://www.instagram.com/">
                        <span>
                            <Image src="/logo-instagram.svg" alt="Instagram" width={30} height={30} />
                        </span>
                        <span>
                            Instagram
                        </span>
                    </a>
                    <a href="https://www.youtube.com/">
                        <span>
                            <Image src="/logo-youtube.svg" alt="Youtube" width={30} height={30} />
                        </span>
                        <span>
                            Youtube
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <span>
                            <Image src="/logo-linkedin.svg" alt="LinkedIn" width={30} height={30} />
                        </span>
                        <span>
                            LinkedIn
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}