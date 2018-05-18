import React, { Component } from 'react';  // importer un composant

class TextEditable extends Component {

    state = {
        editing: false
    };

    
    onToggle = () => {
        this.setState({ editing: !this.state.editing });

    }; // fonction pour inverser la fonction editing  avec !this....


    renderDefault = () => {
        return (
            <div onClick={this.onToggle}>
                {this.props.children}
            </div>
        )
    }; // recupere un element clickable



    onSave = (event) => {
        if (event.keyCode === 27) {
            this.onToggle();
            return;
        }

        if (event.keyCode === 13) {
            const text = event.target.value;

            if (text.trim()) {
                this.props.save(text);

            }

            this.onToggle();
        }
    };


    renderInputText = () => {

        const element = this.props.children;  // element == h2

        return (
            <input
                type="text"
                className={this.props.classes}
                defaultValue={element.props.children}
                onBlur={this.onToggle}  // retour à la normale si on click hors case
                onKeyUp={this.onSave}  // methode onsave a creer
                autoFocus />
        )
    }; // afficher suivant vrai ou faux

    render() {


        if (this.state.editing) {
            return this.renderInputText();
        }
        return this.renderDefault();

    }
}

TextEditable.defaultProps = {
    classes: 'form-control'
  };
export default TextEditable;
