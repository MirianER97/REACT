import React ,{Component} from 'react';

class CD extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'Pero tengo que conectarme a la clase de classroom'
        }
    }
render(){
        return(
        <h1>{this.state.hello}</h1>
)
    }
};



export default CD;