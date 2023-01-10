import NavItem from "./NavItem";
import Link from "next/link";

const Nav = ({categories}) => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <Link href="/">Úvod</Link>
                {categories?.map((category) => {
                    return (
                        <NavItem key={category.id} item={category}/>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;