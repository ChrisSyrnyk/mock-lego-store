import { render } from '@testing-library/react';
import React, {Component} from 'react';



class PriceFilter extends Component{
    constructor(props){
        super(props)

        this.state =({
            currentlySelected: "none",
            lastSelected: "",
        })

    }
    
    selectFilter(floor, ceiling, id){
        if ((this.props.floor == floor) & (this.props.ceiling == ceiling)){
            this.props.setFloor(0);
            this.props.setCeiling(10000);
            
        } else {
            this.props.setFloor(floor);
            this.props.setCeiling(ceiling);
        }
        this.highlightSelected(id);
    }

    highlightSelected(id){
        if (this.state.currentlySelected == "none"){
            document.getElementById(id).classList.add("onPage");
            this.setState({currentlySelected: id});
        } else if (this.state.currentlySelected == id){
            document.getElementById(id).classList.remove("onPage");
            this.setState({currentlySelected: "none"});
        } else {
            document.getElementById(this.state.currentlySelected).classList.remove("onPage");
            document.getElementById(id).classList.add("onPage");
            this.setState({currentlySelected: id});
        }
    }

    

    

    render(){
        return(
            <>
                <div className = "category-header">Filter by Price</div>
                <div className = "category-divider"/>
                <div className = "category-card " id = "$10 - $50" onClick = {()=> this.selectFilter(10,50, "$10 - $50")}>$10 - $50</div>
                <div className = "category-card " id = "$50 - $100" onClick = {()=> this.selectFilter(50,100,"$50 - $100")}>$50 - $100</div>
                <div className = "category-card " id = "$100 - $500" onClick = {()=> this.selectFilter(100,500,"$100 - $500")}>$100 - $500</div>
                <div className = "category-card " id = "$500+" onClick = {()=> this.selectFilter(500,1000,"$500+")}>$500+</div>
            </>
        )
    }
}

export default PriceFilter