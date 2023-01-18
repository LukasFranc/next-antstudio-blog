import NavItem from "./NavItem";
import Link from "next/link";

const Nav = ({categories}) => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className='navigation__item'><Link href="/">Úvod</Link></li>
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