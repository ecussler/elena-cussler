import React from "react";

const styles = {
    body: {
        color: 'navy'
    }
}

function ProjectItem(props) {
  return (
    <div id='project-container' className="flex w-full grid-flow-row grid-cols-3 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4">
    {props.projects.map(item => (
        <div className="card bg-base-100 shadow-xl m-2 w-96 ">
            <figure>
                <img
                src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
                />
            </figure>
        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div className="badge badge-accent">Techs</div>
            <p>{item.description}</p>
            <div className="card-actions justify-center">
                <button href={item.github} className="btn-secondary rounded-xl btn-m p-2">GitHub Repo</button>            <div className="card-actions justify-end">
                <button href={item.github} className="btn-secondary rounded-xl btn-m p-2">Deployed Site</button>
            </div>
            </div>
        </div>
        </div>
    ))}
    </div>
  );
}

export default ProjectItem;
