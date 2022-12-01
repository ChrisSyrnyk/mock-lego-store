import styles from './../styles.css';
import { Link } from "react-router-dom";
import architecture from './../products/architecture';
import ProductCards from './../components/ProductCards';


const ArchitectureSets = () => {

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
                    <Link className = "category-card onPage" to = "/ArchitectureSets">
                        Architecture 
                    </Link>
                    <Link className = "category-card" to = "/StarWarsSets">
                        Star Wars™ 
                    </Link>
                    <Link className = "category-card" to = "/TechnicSets">
                        Technic™ 
                    </Link>
                </div>
                <div className = "items-container">
                    <ProductCards theme = {architecture}/>
                </div>
            </div>
        </>
      );
    
};

export default ArchitectureSets