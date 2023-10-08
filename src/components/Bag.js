import React, {Component} from 'react';
import bagStyles from '../styles/bagstyles.css';
import BagCard from './BagCard'
import BagContents from './BagContents';
import ErrorMessage from './ErrorMessage';

class Bag extends Component{
    constructor(props){
        super(props)

        this.state = {
            showError: true,
        }
    }

    toggleError(){
        this.setState({
            showError: true,
        })
        setTimeout(()=>{
            this.setState({
                showError: false,
            })
        }, 1000
        )
    }

    slide = function () {
        let error = document.getElementById("error");
        error.classList.toggle("slide-down")
        setTimeout(()=>{
            error.classList.toggle("slide-down")
        }, 3000
        )
      };

    render(){
        if (this.props.showBag == true){
            return(
                <>
                <div className = "faded-background"/>
                <div className = "bag-container">

                    <div className = "bag-card bag-title">
                        Your <br/> Shopping Bag
                    </div>

                    <BagCard BagList = {this.props.BagContents.itemsList} bagCount = {this.props.bagCount} setBagCount = {this.props.setBagCount}/>

                    <div className = "bag-card">
                        <div className='checkout-container'>
                            <div className = "checkout-button" onClick={()=> this.slide()}>
                                <div className = "center checkout-text">
                                    Checkout
                                </div>
                            </div>
                            <ErrorMessage error = {this.state.showError}/>
                        </div>
                    </div>
                    

                    
                </div>
                </>
            )

        }
    }

}

export default Bag
