import React from 'react';
import Project from './Project'; 

function ProjectContainer() {
    return (
        <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
        <div className='px-2 pt-2'>
            <h2>Projects</h2>
        </div>

        <div id='project-container' className="flex w-full grid-flow-row grid-cols-12 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4">
            <Project />
            <Project />
            <Project />
        </div>
      </div> 
    ); 
};

export default ProjectContainer; 