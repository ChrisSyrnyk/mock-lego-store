import React, {Component} from 'react';
import BagContents from './BagContents';

class ProductCards extends Component{
    constructor(props){
        super(props)
    }
    
    addtoBag(product){
        if(BagContents.addToList(product) == true){
            this.props.setBagCount(this.props.bagCount + 1)
        }
    }

    render(){
        return(
            <>
                {this.props.theme.map((product)=>{
                    if ((this.props.floor < product.price) && (this.props.ceiling > product.price)){
                        return(
                            <div key = {product.id} className = "item-card">
                                <img src = {product.image} className = "item-img"/>
                                <div className = "item-info">
                                    <div className = "item-price">{product.name}</div>
                                    <div className = "item-price">{'$' + product.price + ' CAD'}</div>
                                    <div className = "add-to-bag">
                                        <div className = "text-center" onClick = {()=> this.addtoBag(product)}>Add to Bag</div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                })}
            </>
            
        )
    }
}

export default ProductCards