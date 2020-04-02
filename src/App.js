import React, { Component } from 'react';
import Note from './components/Note'; //import Note component
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      noteText : '',
      notes : [], //holds array of each note we want to create,
    }
  }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value })
  }

  addNote(){
    if(this.state.noteText === '')
      {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index,1);
    this.setState({notes: notesArr});
  }

  handleKeyPress = (event) => {
    if(event.key==='Enter'){
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: '' });
    }
  }

  render() {

    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
              deleteMethod={() => this.deleteNote(key) } />
    })

    return (
      <div className="Container">
           <div className="header">
               React ToDo App
           </div>
           {notes}
           <div className="btn" onClick={this.addNote.bind(this)}>
               Add
           </div>
           <input type="text"
            ref={((input) => {this.textInput = input})}  
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
           />
      </div>  
    );
  }
}

export default App;
