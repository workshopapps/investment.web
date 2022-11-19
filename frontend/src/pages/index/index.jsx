/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

const IndexPage = () => {
    return (
        <div className="flex flex-col h-screen ">
            <div className="nav-bar flex-none">
                <Nav />
            </div>
            <div className="page-content grow">
                <Outlet />
            </div>
            <div className="footer flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default IndexPage;
