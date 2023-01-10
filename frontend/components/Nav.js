import NavItem from "./NavItem";

const Nav = ({categories}) => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
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