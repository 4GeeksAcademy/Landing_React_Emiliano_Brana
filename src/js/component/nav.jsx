import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-darkno navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Start Boostrap</a>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white-50" href="#">About</a>
                        <a className="nav-link text-white-50" href="#">Services</a>
                        <a className="nav-link text-white-50" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;