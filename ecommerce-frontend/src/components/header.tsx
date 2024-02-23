import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const user = {_id : "ggh", role : "admin"}
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const logoutHandler = () =>{
        setIsOpen(false)
    }
  return (
    <nav  className="header">
      <Link onClick={() => setIsOpen(false)} to={`/`}>HOME</Link>
      <Link onClick={() => setIsOpen(false)} to={`/search`}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={`/cart`}>
        <FaShoppingBag />
      </Link>
      {user?._id? (
        <>
        <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
        </button>
        <dialog open = {isOpen}>
         <div>
            {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to={"/admin/dashboard"}>Admin</Link>
            )}
         </div>
         <Link onClick={() => setIsOpen(false)} to={"/orders"}>Orders</Link>
         <button onClick={logoutHandler}></button>
        </dialog>
        </>
      ) : (
        <Link to = {`/login`}>
            <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};

export default Header;
