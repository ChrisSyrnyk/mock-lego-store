import styles from './../styles.css';
import { Link } from "react-router-dom";
import technic from './../products/technic';
import ProductCards from './../components/ProductCards';


const TechnicSets = () => {

    return (
        <>
            <div className = "header">
                <img src = {require('./../img/lego.png')} className = "lego-logo"/>
                <img src = {require('./../img/bag.png')} className = "bag-logo"/>
            </div>
            <div className="main-container">
                <div className ="categories-container">
                    <div className = "category-header">
                        Categories
                    </div>
                    <div className = "category-divider"/>
                    <Link className = "category-card" to = "/AllSets">
                        AllSets 
                    </Link>
                    <Link className = "category-card" to = "/ArchitectureSets">
                        Architecture 
                    </Link>
                    <Link className = "category-card" to = "/StarWarsSets">
                        Star Wars™ 
                    </Link>
                    <Link className = "category-card onPage" to = "/TechnicSets">
                        Technic™ 
                    </Link>
                </div>
                <div className = "items-container">
                    <ProductCards theme = {technic}/>
                </div>
            </div>
        </>
      );
    
};

export default TechnicSets