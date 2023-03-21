import React from 'react';
import ProjectItem from './ProjectItem'; 



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
            <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0 mx-10 bg-blue-200">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
            <div className='px-2 pt-2'>
                <h2 className='text-3xl font-bold px-3 py-2'>My Projects</h2>
            </div>

                <ProjectItem projects={projects}/>


        </div> 
      </div>
    ); 
};

export default projects; 