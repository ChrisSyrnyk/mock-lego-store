import styles from '../styles.css';
import { Link } from "react-router-dom";
import starwars from '../products/starwars';
import architecture from '../products/architecture';
import ProductCards from '../components/ProductCards';
import technic from '../products/technic';
import Bag from '../components/Bag'
import BagContents from '../components/BagContents';
import bagStyles from '../styles/bagstyles.css';
import React, {useState} from 'react';
import Header from '../components/Header'
import PriceFilter from '../components/PriceFilter';
import harryPotter from '../products/harryPotter';

const AllSets = () => {

    const [showBag, setShowBag] = useState(false);
    const [floor, setFloor] = useState(0); //beyond reach of least expensive product
    const [ceiling, setCeiling] = useState(10000); //beyond reach of most expensive product

    function toggleShowBag(){
        if (showBag == true){
            setShowBag(false)
        } else {
            setShowBag(true)
        }
    }

    return (
        <>
            <div className="main-container">
                <div className ="categories-container">
                    <div className = "category-header">
                        Categories
                    </div>
                    <div className = "category-divider"/>
                    <Link className = "category-card onPage" to = "/AllSets">
                        AllSets 
                    </Link>
                    <Link className = "category-card" to = "/ArchitectureSets">
                        Architecture 
                    </Link>
                    <Link className = "category-card" to = "/HarryPotterSets">
                        Harry Potter™ 
                    </Link>
                    <Link className = "category-card" to = "/StarWarsSets">
                        Star Wars™ 
                    </Link>
                    <Link className = "category-card" to = "/TechnicSets">
                        Technic™ 
                    </Link>
                    <PriceFilter setFloor = {setFloor} setCeiling = {setCeiling} floor = {floor} ceiling = {ceiling}/>
                </div>
                <div className = "items-container">
                    <ProductCards theme = {starwars} floor = {floor} ceiling = {ceiling}/>
                    <ProductCards theme = {architecture} floor = {floor} ceiling = {ceiling}/>
                    <ProductCards theme = {technic} floor = {floor} ceiling = {ceiling}/>
                    <ProductCards theme = {harryPotter} floor = {floor} ceiling = {ceiling}/>
                </div>
            </div>
            {/*Leave header at bottom so bag shows up ontop of main*/}
            <Header/>
            
            
        </>
      );
    
};

export default AllSets