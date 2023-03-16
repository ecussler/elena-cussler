import React from "react";

function Project(props) {
  return (
    <div>
    {props.projects.map(item => (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
                />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div className="badge badge-secondary">Techs</div>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
                <button href={item.github} className="btn btn-xs">See GitHub Repo</button>
            </div>
        </div>
        </div>
    ))}
    </div>
  );
}

export default Project;
