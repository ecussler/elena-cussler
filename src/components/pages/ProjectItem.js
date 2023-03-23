import React from "react";
import { Link } from 'react-router-dom'; 

const styles = {
    body: {
        color: 'navy'
    }
}

function ProjectItem(props) {
  return (
    <div id='project-container' className="flex flex-wrap w-full grid-flow-row grid-cols-3 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4">
    {props.projects.map(item => (
        <div className="card bg-base-100 shadow-xl m-2 w-96 ">

        <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <div className="badge badge-accent">Techs</div>
            <p>{item.description}</p>
            <div className="card-actions justify-center">
                <Link to={item.github} target='_blank' className="btn-secondary rounded-xl btn-m p-2">GitHub Repo</Link>            <div className="card-actions justify-end">
                <Link to={item.site} target='_blank' className="btn-secondary rounded-xl btn-m p-2">Deployed Site</Link>
            </div>
            </div>
        </div>
        </div>
    ))}
    </div>
  );
}

export default ProjectItem;
