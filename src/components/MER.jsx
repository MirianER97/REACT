import React ,{Component} from 'react';

class MER extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'Me voy'
        }
    }
render(){
        return(
        <h1>{this.state.hello}</h1>
)
    }
};



export default MER;