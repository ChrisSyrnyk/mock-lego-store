import React, {Component} from 'react';

class ErrorMessage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if (this.props.error == true){
            return(
                <div className='slide-up' id = "error">
                    <div className='error-message-holder'>
                        <div className = "center">
                            Error - This is a mock lego store...
                        </div>
                    </div>
                </div>
            )

        }
    }

}

export default ErrorMessage