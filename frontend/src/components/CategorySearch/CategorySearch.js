import "./category.css"
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
const CategorySearch =()=>{
  const [showMenu,setShowMenu] = useState()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    }




    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


    return (
      <>
        <div className="category-holder">
          <div className="res-category" onClick={openMenu}>
            <h1>Fast Search</h1>
          </div>
          {showMenu && (
            <div className="categorySearch">
              <Link to={`/search/pizza`}>
                <h1>Pizza</h1>
              </Link>
              <Link to={`/search/burger`}>
                <h1>Burgers</h1>
              </Link>
              <Link to={`/search/drinks`}>
                <h1>Drinks</h1>
              </Link>
            </div>
          )}
        </div>
      </>
    );
}

export default CategorySearch
