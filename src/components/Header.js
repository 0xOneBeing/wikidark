export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            <h1>
              <span>Wikipedia</span>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="row d-flex">
              <div className="col-md-7">
                <form className="container-fluid" role="search">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link wd-text"
                      aria-current="page"
                      href="./"
                    >
                      Create account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link wd-text" href="./">
                      Log in
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="three-dots" href="./">
                      .&nbsp;.&nbsp;.
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
