import styles from './styles.css'
import { Link } from "react-router-dom";
import starwars from './products/starwars'
import ProductCards from './components/ProductCards'


const Profile = () => {

    return (
        <>
            <div className = "header">
                <img src = {require('./img/lego.png')} className = "lego-logo"/>
                <img src = {require('./img/bag.png')} className = "bag-logo"/>
            </div>
            <div className="main-container">
                <div className ="categories-container">
                    <div className = "category-header">
                        Categories
                    </div>
                    <div className = "category-divider"/>
                    <div className = "category-card">
                        All Sets
                    </div>
                    <div className = "category-card">
                        Architecture
                    </div>
                    <div className = "category-card">
                        Star Wars™
                    </div>
                    <div className = "category-card">
                        Technic™
                    </div>
                </div>
                <div className = "items-container">
                    <ProductCards starwars = {starwars}/>
                </div>
            </div>
        </>
      );
    
};

export default Profile