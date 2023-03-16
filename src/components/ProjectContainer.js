import React from 'react';
import Project from './Project'; 


const projects = [
    {
        name: "Sweet Solution", 
        techs: [
            'Node.js',
            'Express.js', 
            'MySQL', 
            'Sequelize', 
            'Handlebars.js'
        ], 
        description: 'Online app to display bakery goods and create user accounts for ordering.', 
        github: 'https://github.com/EarlofSmith/sweet-solution'
    }, 
    {
        name: "Cocktailz", 
        techs: [
            'JavaScript', 
            'Bootstrap', 
            'RESTful API'
        ], 
        description: 'Online front-end app to randomly generate cocktail recipes', 
        github: 'https://github.com/lizedelman/bopsnbooze'
    }, 
    {
        name: 'Third Project', 
        techs: [
            'TBD'
        ], 
        description: 'Currently working with group to establish user story', 
        github: 'TBD'
    }
]
function ProjectContainer() {
    return (
        <div className="hero min-h-screen bg-white" >
            <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0 mx-10">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
            <div className='px-2 pt-2'>
                <h2 className='text-3xl font-bold px-3 py-2'>My Projects</h2>
            </div>

            <div id='project-container' className="flex w-full grid-flow-row grid-cols-12 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4">
                <Project projects={projects}/>

            </div>
        </div> 
      </div>
    ); 
};

export default ProjectContainer; 