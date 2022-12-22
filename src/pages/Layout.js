import { Link, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
            <Link to="/"></Link>
            <Link to="/products"></Link>
            <Link to="/cart"></Link>
            <Outlet />
        </>
    )
}

export default Layout;