import React, {Component} from "react";
import Card from './Card';

class CardList extends Component{
    constructor(){
        super();
    }

    render(){
        const robots = this.props.robots;
        return (<div>
            {
                robots.map((robo, i) =>{
                    return (
                    <Card
                    key={i}
                    id={robo.id}
                    name={robo.name}
                    email={robo.email}
                    ></Card>);
                })
            }
        </div>);
        
    }
}

export default CardList;