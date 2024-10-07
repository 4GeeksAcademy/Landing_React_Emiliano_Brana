import React from "react";

const Nav = () => {
	return (
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Start Boostrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a class="nav-link text-white-50" href="#">About</a>
        <a class="nav-link text-white-50" href="#">Services</a>
		<a class="nav-link text-white-50" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
	);
};

export default Nav;