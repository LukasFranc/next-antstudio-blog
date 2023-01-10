import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, categories, contentClass= ''}) => (
    <>
        <Header navigationCategories={categories}/>
            <div id="content" className={contentClass}>
                {children}
            </div>
        <Footer />
    </>
);

export default Layout;