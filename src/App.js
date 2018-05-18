import React, { Component } from 'react';
import './App.css';
import Article from './Article';  //importer  article depuis le repertoire article
import TextEditable from './TextEditable';
import Message from './Message';
import Quote from './Quote';

class App extends Component {
  state = {
    title: 'titre par defaut'
  }
  save = (text) => {
    this.setState({ title: text });
  }

  render() {
    return (
      <div className="container">
        <h1> Mon composant APP </h1>

        <Quote/>

        <Message limit="30"/>

        <Message limit="20"/>

        <TextEditable save={this.save}>
          <h2>  {this.state.title} </h2>
        </TextEditable>

        
        <Article title="mon super titre"
          imgUrl="http://gif.toutimages.com/images/transports/voitures/voiture_027.gif" >

          blah blah .....
        </Article>

        <TextEditable save={this.save}>
          <h2>  {this.state.title} </h2>
        </TextEditable>

        <Article title="mon super projet" 
        imgUrl="/images/5465.jpg"></Article>

        <TextEditable save={this.save}>
          <h2>  {this.state.title} </h2>
        </TextEditable>
        
        <Article title="Lorem ipsum...."
          imgUrl="images/Ferrari_FF_.gif" >
        </Article>


      </div>
    );
  }
}


export default App;
