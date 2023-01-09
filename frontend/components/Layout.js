import Header from "./Header";

const Layout = ({children, categories}) => (
    <>
        <Header navigationCategories={categories}/>
        {children}
    </>
);

export default Layout;