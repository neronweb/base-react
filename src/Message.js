import React, { Component } from 'react';  // importer un composant pour manipuler les class

class Message extends Component {

    state = {
        text: ""
    };

    changeText=(event)=>{
        this.setState({text: event.target.value})
    };
// creer une fonction qui recupere le contenu
    render() {

        const style ={};
        const length =this.state.text.length;

        if (length > (this.props.limit -10)) {
            style.color = 'orangered';
        }

        return (

            <div className="textarea">

                <textarea 
                    onChange={this.changeText} 
                    rows="3" 
                    cols="20"
                    style={style} 
                    maxLength={this.props.limit}></textarea>

                <div>Nombre de caracteres: {length}</div>
                <p>{this.state.text}</p>
            </div>
        )
    }
};

export default Message; // obligatoire