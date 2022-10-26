import { Component } from "react";

import { AppContext } from "../context";

import withRouter from "../hoc/withRouter";

class NewNote extends Component {
  state = {
    title: "",
    body: "",
    pinned: false,
    favourite: false,
    deleted: false,
  };

  static contextType = AppContext;

  createNote = (pinned = false) => {
    const note = {
      ...this.state,
      color: Math.floor(Math.random() * 6) + 1,
      pinned,
    };
    this.context.addNewNote(note);
    this.props.router.navigate("/");
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <>
        <div className="Main__Header">
          <h3 className="Main__Heading">Add New Note</h3>
        </div>
        <form className="Main__Form">
          <div className="Main__FormGroup">
            <input
              type="text"
              placeholder="Enter note title"
              className="Main__FormInput Main__FormInput--Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="Main__FormGroup Main__FormGroup--Action">
            <textarea
              placeholder="Enter note body"
              className="Main__FormInput"
              rows="5"
              value={this.state.body}
              onChange={(e) => this.setState({ body: e.target.value })}
            ></textarea>
            <div className="ExtraBtn">
              <div className="ExtraBtn__Dots Color--White">
                <span className="ExtraBtn__Dot"></span>
                <span className="ExtraBtn__Dot"></span>
                <span className="ExtraBtn__Dot"></span>
              </div>
              <ul className="Extra">
                <li className="Extra__Item" onClick={() => this.createNote()}>
                  <ion-icon name="save-outline"></ion-icon>Save
                </li>
                <li
                  className="Extra__Item"
                  onClick={() => this.createNote(true)}
                >
                  <ion-icon name="pin-outline"></ion-icon>Pin Note
                </li>
              </ul>
            </div>
          </div>
          <div className="Main__FormGroup Main__FormGroup--End"></div>
        </form>
      </>
    );
  }
}

export default withRouter(NewNote);
