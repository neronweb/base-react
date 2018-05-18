import React, { Component } from 'react';  // importer un composant pour manipuler les class
import "./Vote.css"; // pour que le fichier css soit rattaché uniquement au composant


class Vote extends Component {

onVote= (note) =>{
this.props.onNote(note);
};
isActive = (position) => {
    return this.props.note >= position ? ' active' : '';
}

    render() {
// avec array from on construit un pseudo tableau  sur lequel on peut appiquer une fonction de boucle
        const renderStars = Array.from({ length: this.props.nbStars },  (v, k) => {
            let position = k + 1;
            return <span 
            className={ 'star' + this.isActive(position)}
            key={position}
            onClick={(e) => { this.onVote(position) }}>☆</span>
        }); 

        return (

            <div className="stars">

                {renderStars}

            </div>
        )
    }
}

export default Vote; // obligatoire