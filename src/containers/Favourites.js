import { Component } from "react";

import { AppContext } from "../context";

class Favourites extends Component {
  state = {
    notes: [],
    loading: true,
  };

  static contextType = AppContext;

  componentDidMount() {
    this.updateNotes();
  }

  updateNotes = () => {
    const notes = this.context.notes.filter(
      (note) => !note.deleted && note.favourite
    );
    this.setState({
      notes,
    });
  };

  render() {
    return (
      <>
        <div className="Main__Header">
          <h3 className="Main__Heading">Favourite Notes</h3>
        </div>
        <div className="Main__SubHeader">
          <h3 className="Main__SubHeading">All Favourite Notes</h3>
          <div className="Main__SubHeading__Divider"></div>
        </div>
        <div className="Notes">
          {this.state.notes.map((note) => {
            return (
              <div className={`Note Note--${note.color}`} key={note.id}>
                <div className="Note__Header">
                  <h3 className="Note__Title">{note.title}</h3>
                  <div className="ExtraBtn">
                    <div className="ExtraBtn__Dots">
                      <span className="ExtraBtn__Dot"></span>
                      <span className="ExtraBtn__Dot"></span>
                      <span className="ExtraBtn__Dot"></span>
                    </div>
                    <ul className="Extra">
                      <li
                        className="Extra__Item"
                        onClick={() => {
                          this.context.updateNote(
                            note.id,
                            {
                              ...note,
                              favourite: false,
                            },
                            this.updateNotes
                          );
                        }}
                      >
                        <ion-icon name="heart-outline"></ion-icon> Remove
                      </li>
                      <li
                        className="Extra__Item"
                        onClick={() => {
                          this.context.updateNote(
                            note.id,
                            {
                              ...note,
                              deleted: true,
                            },
                            this.updateNotes
                          );
                        }}
                      >
                        <ion-icon name="trash-outline"></ion-icon> Delete
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="Note__Text">{note.body}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Favourites;
