import styles from './../styles.css';
import { Link } from "react-router-dom";
import technic from './../products/technic';
import ProductCards from './../components/ProductCards';
import Header from '../components/Header'
import React, {useState} from 'react';
import PriceFilter from '../components/PriceFilter'

const TechnicSets = () => {

    const [floor, setFloor] = useState(0); //beyond reach of least expensive product
    const [ceiling, setCeiling] = useState(10000); //beyond reach of most expensive product

    return (
        <>
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
                    <Link className = "category-card" to = "/HarryPotterSets">
                        Harry Potter™ 
                    </Link>
                    <Link className = "category-card" to = "/StarWarsSets">
                        Star Wars™ 
                    </Link>
                    <Link className = "category-card onPage" to = "/TechnicSets">
                        Technic™ 
                    </Link>
                    <PriceFilter setFloor = {setFloor} setCeiling = {setCeiling} floor = {floor} ceiling = {ceiling}/>
                </div>
                <div className = "items-container">
                    <ProductCards theme = {technic} floor = {floor} ceiling = {ceiling}/>
                </div>
            </div>
            {/*Leave header at bottom so bag shows up ontop of main*/}
            <Header/>
        </>
      );
    
};

export default TechnicSets