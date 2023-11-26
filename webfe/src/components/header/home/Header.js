import { Link, NavLink } from "react-router-dom"
import "./Header.scss"


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="../../../asset/logo.png" alt="logo" />
            </div>
            <div className="nav-menu">
                <Link to={"/"}>
                    <span>Trang chủ</span>
                </Link>
                <Link>
                    <span>Giới thiệu</span>
                </Link>
                <Link to={"/contract"}>
                    <span>Thêm hợp đồng</span>
                </Link>
                <Link>
                    <span>Liên hệ</span>
                </Link>
            </div>
        </div>
    )
}

export default Header