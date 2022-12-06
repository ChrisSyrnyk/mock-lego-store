import React, {Component} from 'react';
import bagStyles from '../styles/bagstyles.css';
import BagCard from './BagCard'
import BagContents from './BagContents';

class Bag extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.showBag == true){
            return(
                <>
                <div className = "faded-background"/>
                <div className = "bag-container">

                    <div className = "bag-card bag-title">
                        Your <br/> Shopping Bag
                    </div>

                    <BagCard BagList = {this.props.BagContents.itemsList}/>

                    <div className = "bag-card">
                        <div className = "checkout-button">
                            <div className = "center bag-title">
                                Checkout
                            </div>
                        </div>
                    </div>

                </div>
                </>
            )

        }
    }

}

export default Bag
