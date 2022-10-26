import { Component } from "react";

import { AppContext } from "../context";

class Main extends Component {
  state = {
    pinnedNotes: [],
    otherNotes: [],
    search: "",
    loading: true,
  };

  static contextType = AppContext;

  componentDidMount() {
    this.updateNotes();
  }

  updateNotes = () => {
    const notes = this.context.notes.filter(
      (note) =>
        note.deleted !== true &&
        (this.state.search === "" ||
          note.title.toLowerCase().startsWith(this.state.search))
    );
    this.setState({
      pinnedNotes: notes.filter((note) => note.pinned),
      otherNotes: notes.filter((note) => !note.pinned),
    });
  };

  render() {
    return (
      <>
        <div className="Main__Header">
          <h3 className="Main__Heading">All Notes</h3>
          <form className="Main__Search">
            <ion-icon
              name="search-outline"
              class="Main__Search__Icon"
            ></ion-icon>
            <input
              type="text"
              placeholder="Search"
              className="Main__Search__Input"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value }, () => {
                  this.updateNotes();
                });
              }}
            />
          </form>
        </div>
        <div className="Main__SubHeader">
          <h3 className="Main__SubHeading">Pinned Notes</h3>
          <div className="Main__SubHeading__Divider"></div>
        </div>
        <div className="Notes">
          {this.state.pinnedNotes.map((note) => {
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
                      {!note.favourite ? (
                        <li
                          className="Extra__Item"
                          onClick={() => {
                            this.context.updateNote(
                              note.id,
                              {
                                ...note,
                                favourite: true,
                              },
                              this.updateNotes
                            );
                          }}
                        >
                          <ion-icon name="heart-outline"></ion-icon> Favourite
                        </li>
                      ) : null}
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
        <div className="Main__SubHeader">
          <h3 className="Main__SubHeading">Other Notes</h3>
          <div className="Main__SubHeading__Divider"></div>
        </div>
        <div className="Notes">
          {this.state.otherNotes.map((note) => {
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
                      {!note.favourite ? (
                        <li
                          className="Extra__Item"
                          onClick={() => {
                            this.context.updateNote(
                              note.id,
                              {
                                ...note,
                                favourite: true,
                              },
                              this.updateNotes
                            );
                          }}
                        >
                          <ion-icon name="heart-outline"></ion-icon> Favourite
                        </li>
                      ) : null}
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

export default Main;
