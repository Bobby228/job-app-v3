import { Outlet } from 'react-router'
import Header from "../Header/Header.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;