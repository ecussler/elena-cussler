import React from "react";

function Project() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Project Card Title</h2>
        <div className="badge badge-secondary">Techs</div>
        <p>Short description</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See GitHub Repo</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
