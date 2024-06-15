import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  API_URL = "http://localhost:5193/";


  componentDidMount() {
    this.refreshNotes();
  }

  async refreshNotes() {
    fetch(this.API_URL+"api/todoapp/GetNotes").then(response => response.json())
      .then(data => {
        this.setState({notes:data});
      })
  }

  async addClick() {
    var newNotes = document.getElementById("newNotes").value;
    const data = new FormData();
    data.append("newNotes", newNotes);

    fetch(this.API_URL + "api/todoapp/AddNotes", {
      method: "POST",
      body: data
    }).then(res => res.json())
      .then((result) => {
        alert(result);
        this.refreshNotes();
      })
  }
  async deleteClick(id) {

    fetch(this.API_URL + "api/todoapp/DeleteNotes?id=" + id, {
      method: "DELETE",
    }).then(res => res.json())
      .then((result) => {
        alert(result);
        this.refreshNotes();
      })
  }
  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <h2>Todo App</h2>
        <input id="newNotes" />&nbsp;
        <button onClick={() => this.addClick()}>Add Notes</button>
        {notes.map(note =>
          <p>
            <b>* {note.description}</b>
            <button onClick={() => this.deleteClick(note.id)}>Delete Notes</button>
          </p>
        )}
      </div>
    );
  }
}

export default App;
