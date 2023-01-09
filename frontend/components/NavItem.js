import Link from "next/link";

const NavItem = ({item}) => {
    return (
        <li key={item.id} className='navigation__item'>
            <Link href={`/category/${item.attributes.slug}`}>
                <a className="">{item.attributes.name}</a>
            </Link>
        </li>
    );
};

export default NavItem