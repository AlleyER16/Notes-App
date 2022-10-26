import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <div className="Logo">
        <span className="Logo__Dot Logo__Dot--1"></span>
        <span className="Logo__Dot Logo__Dot--2"></span>
        <span className="Logo__Dot Logo__Dot--3"></span>
      </div>
      <ul className="Navigation">
        <li className="Navigation__Item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "Navigation__Link Navigation__Link--Active"
                : "Navigation__Link"
            }
          >
            <ion-icon name="book-outline" class="Navigation__Icon"></ion-icon>{" "}
            All Note
          </NavLink>
        </li>
        <li className="Navigation__Item">
          <NavLink
            to="/new-note"
            className={({ isActive }) =>
              isActive
                ? "Navigation__Link Navigation__Link--Active"
                : "Navigation__Link"
            }
          >
            <ion-icon
              name="bookmark-outline"
              class="Navigation__Icon"
            ></ion-icon>{" "}
            Notebook
          </NavLink>
        </li>
        <li className="Navigation__Item">
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "Navigation__Link Navigation__Link--Active"
                : "Navigation__Link"
            }
          >
            <ion-icon name="heart-outline" class="Navigation__Icon"></ion-icon>{" "}
            Favourite
          </NavLink>
        </li>
        <li className="Navigation__Item">
          <NavLink
            to="/deleted"
            className={({ isActive }) =>
              isActive
                ? "Navigation__Link Navigation__Link--Active"
                : "Navigation__Link"
            }
          >
            <ion-icon name="trash-outline" class="Navigation__Icon"></ion-icon>{" "}
            Deleted
          </NavLink>
        </li>
        <li className="Navigation__Item">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "Navigation__Link Navigation__Link--Active"
                : "Navigation__Link"
            }
          >
            <ion-icon
              name="settings-outline"
              class="Navigation__Icon"
            ></ion-icon>{" "}
            Settings
          </NavLink>
        </li>
      </ul>
      <Link to="/new-note" className="NewNoteBtn">
        <ion-icon name="add-outline" class="NewNoteBtnIcon"></ion-icon>
      </Link>
    </aside>
  );
};

export default Sidebar;
