import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header({navigationCategories}) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <Link href="/">
                        <Image src="/ant-logo-color.svg" alt="ANTstudio" width={218} height={30}/>
                    </Link>
                </div>
                <Nav categories={navigationCategories}/>
            </div>
        </header>
    )
}