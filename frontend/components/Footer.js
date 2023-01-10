export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/">
                        <img src="/facebook.svg" alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src="/instagram.svg" alt="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src="/linkedin.svg" alt="linkedin" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img src="/twitter.svg" alt="twitter" />
                    </a>
                </div>
            </div>
        </footer>
    );
}