import { Link } from "react-router";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">Knygos.lt</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"home"}>
                  Knygos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"register"}>
                  Registruoti
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
