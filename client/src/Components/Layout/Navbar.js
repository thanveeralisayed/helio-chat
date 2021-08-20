import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container container-fluid">
                    <a className="navbar-brand" href="#">Helio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ textDecorationLine: 'none' }} to={'/'}>
                                    <a className="nav-link active" aria-current="page" href="##">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <ul className="d-flex navbar-nav ">


                           {user!==null?  <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> : <li className="nav-item">
                                <a className="nav-link" href="#">SignUp</a>
                            </li>}

                          


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
