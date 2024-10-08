import React from "react";

const Jumbotron = () => {
  return (
    <div className="container my-4">
      <div
        className="bg-secondary-subtle p-5 rounded border-0"
        style={{ backgroundColor: "rgba(234, 236, 239)" }}
      >
        <div className="row text-start">
          <div className="col-lg-8">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident soluta, optio sapiente illo, minus repellendus quis
              nesciunt maxime ipsa incidunt nisi aspernatur nulla. Assumenda aut
              repellendus facere atque officiis neque.
            </p>
            <a href="#" className="btn btn-primary btn-lg mt-3">
              Call to action!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;