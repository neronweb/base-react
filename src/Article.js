import React, { Component } from 'react';
import Vote from './Vote';

class Article extends Component {

    state = {
        note:0
    };
    getNote =(note) => {
        this.setState({note: note});
    }

    render() {
        return (

            <div className="card" style={{ width: '12rem' }}>
                <img className="card-img-top" src={this.props.imgUrl} alt={"chuck le mentor"} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.children}</p>

                    <Vote nbStars="5" note={this.state.note} onNote={this.getNote}/>

                </div>
            </div>
        )

    }
};
export default Article;  // rendre public
 // dans return : obligation de creer une div