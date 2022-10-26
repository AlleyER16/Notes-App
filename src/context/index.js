import { createContext, Component } from "react";

export const AppContext = createContext(null);

class Provider extends Component {
  constructor(props) {
    super(props);

    const app_state =
      localStorage.getItem("app_state") ??
      JSON.stringify({
        notes: [
          {
            id: "123456780",
            title: "Timeline Amazing Task",
            body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.`,
            color: 1,
            pinned: true,
            favourite: true,
            deleted: false,
          },
          {
            id: "123456789",
            title: "Hello world",
            body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in 
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum.`,
            color: 2,
            pinned: false,
            favourite: false,
            deleted: false,
          },
        ],
      });

    this.state = JSON.parse(app_state);
  }

  addNewNote = (note) => {
    note.id = new Date().getTime();
    this.setState({ notes: [...this.state.notes, note] }, () => {
      this.saveState();
    });
  };

  updateNote = (note_id, newNote, callback) => {
    const notes = [...this.state.notes];

    const noteIndex = this.state.notes.findIndex((note) => note.id === note_id);

    notes[noteIndex] = newNote;

    this.setState({ notes }, () => {
      callback();
      this.saveState();
    });
  };

  saveState = () => {
    localStorage.setItem("app_state", JSON.stringify(this.state));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          notes: this.state.notes,
          addNewNote: this.addNewNote,
          updateNote: this.updateNote,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default Provider;
