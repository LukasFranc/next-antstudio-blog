import Link from "next/link";

const NavItem = ({item}) => {
    return (
        <li key={item.id} className='navigation__item'>
            <Link href={`/blog-category/${item.attributes.slug}`}>
                {item.attributes.categoryName}
            </Link>
        </li>
    );
};

export default NavItem