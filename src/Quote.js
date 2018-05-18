import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
    state = {
        quote: {}
    };

    componentWillMount() {
        this.getQuote();
    };


    getQuote = () => {
        axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
            console.log(response);
            this.setState({ quote: response.data });
        });
    };
    render() {
        return (
            <div>
                <blockquote>
                    {this.state.quote.value}

                </blockquote>
                <img onMouseOver={this.getQuote} src={this.state.quote.icon_url}/> 
                <button onClick={this.getQuote} className="btn btn-success">Refresh</button>
            </div>

        );
    }
}

export default Quote;
