import React, {useState} from 'react';
import BagContents from '../components/BagContents';
import Bag from './Bag'

const Header = (props) =>{

    const [showBag, setShowBag] = useState(false);

    function toggleShowBag(){
        if (showBag == true){
            setShowBag(false)
        } else {
            setShowBag(true)
        }
    }

    return (
        <>
            <div className = "header">
                <img src = {require('../img/lego.png')} className = "lego-logo"/>
                <img src = {require('../img/bag.png')} className = "bag-logo" onClick = {()=> toggleShowBag()}/>
                <div className='bag-count'
                onClick={()=>console.log()}
                ><div className='text-center'>{props.bagCount}</div></div>
            </div>
            <Bag BagContents = {BagContents} showBag = {showBag} bagCount = {props.bagCount} setBagCount = {props.setBagCount}/>
        </>
    )

}

export default Header