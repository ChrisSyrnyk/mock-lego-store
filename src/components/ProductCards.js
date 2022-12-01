import React, {Component} from 'react';

class ProductCards extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                {this.props.starwars.map((product)=>{
                    return(
                        <div key = {product.id} className = "item-card">
                            <img src = {product.image} className = "item-img"/>
                            <div className = "item-price">{product.name}</div>
                            <div className = "item-price">{'$' + product.price + ' CAD'}</div>
                            <div className = "add-to-bag">
                                <div className = "text-center">Add to Bag</div>
                            </div>
                        </div>
                    )
                })}
            </>
            
        )
    }
}

export default ProductCards