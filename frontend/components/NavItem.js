import Link from "next/link";

const NavItem = ({item}) => {
    return (
        <li key={item.id} className='navigation__item'>
            <Link href={`/category/${item.attributes.slug}`}>
                {item.attributes.name}
            </Link>
        </li>
    );
};

export default NavItem