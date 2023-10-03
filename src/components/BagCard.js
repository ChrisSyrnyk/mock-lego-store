import React, {Component} from 'react';
import globalBagContents from './BagContents';

class BagCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            itemsList: this.props.BagList,
        }
    }

    itemCounter = 0;

    changeQuantity(item, change){
        //select item
        let selectedItem = this.state.itemsList.filter(listItem => listItem.name == item.name);
        //unwrap item
        selectedItem = selectedItem[0];
        //create temp list
        let tempList = this.state.itemsList;
        //change quantity of selected item
        selectedItem.quantity += change;
        let itemIndex = 0
        if (selectedItem.quantity > 0){
            let i =0;
            while (i<tempList.length){
                if (tempList[i].name == selectedItem.name){
                    tempList[i] = selectedItem;
                    itemIndex = i;
                    break
                }
                i++;
            }
            //update globalBag
            globalBagContents.updateQuantity(selectedItem.quantity, itemIndex);
        } else {
            let i =0;
            while (i<tempList.length){
                if (tempList[i].name == selectedItem.name){
                    itemIndex = i;
                    break
                }
                i++;
            }
            //remove item from tempList 
            tempList = this.removeItem(item);
            //remove item from globalBag
            globalBagContents.removeFromList(itemIndex);
        }
        //update header
        this.props.setBagCount(this.props.bagCount + change);
        //update this state
        this.setState({
            itemsList: tempList,
        })
        
        
    }

    removeItem(item){
        let filteredList = this.state.itemsList.filter(listItem => listItem.name != item.name);
        return filteredList
    }

    calculatePrice(item){
        return item.quantity * item.price
    }

    calculateSubtotal(){
        let subtotal = 0;
        this.state.itemsList.map((item)=>{
            subtotal += (item.price * item.quantity)
        })
        return Math.round((subtotal + Number.EPSILON) * 100) /100
    }


    render(){
        return(
            <>
                {this.state.itemsList.map((item)=>{
                    return(
                    <div key = {'bag item: ' + item.id}className = "bag-card">
                        <img src = {item.image} className = "bag-item-image"/>
                        <div className = "bag-item-info-container">
                            <div className = "bag-item-info">
                                {item.name}
                            </div>
                            <div className = "bag-item-info medium-font">
                                {'$' + item.price}
                            </div>
                            <div className = "bag-quantity">
                                <img src = {require('.././img/minus-symbol.png')} className = "selection-image" onClick = {()=>this.changeQuantity(item, -1)}/>
                                <div className = "selection-font">{item.quantity}</div>
                                <img src = {require('.././img/plus-symbol.png')} className = "selection-image" onClick = {()=>this.changeQuantity(item, 1)}/>
                            </div>
                        </div>
                    </div>
                    )
                })}
                <div className = "bag-card medium-font">
                        {'Subtotal: $' + this.calculateSubtotal()}
                </div>
            </>
        )
    }
}

export default BagCard
