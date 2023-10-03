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
        role: "Front-end design and implementation for category/product pages, API models and routes for product categories",
        github: 'https://github.com/EarlofSmith/sweet-solution', 
        site: 'https://sweet-solution.herokuapp.com/', 
        thumb: '../../assets/cupcake.png'
    }, 
    {
        name: "Cocktailz", 
        techs: [
            'JavaScript', 
            'Bootstrap', 
            'RESTful API'
        ], 
        description: 'Online front-end app to randomly generate cocktail recipes', 
        role: "Front-end design and dynamic connection to the CocktailsDB API",
        github: 'https://github.com/lizedelman/bopsnbooze', 
        site: 'https://lizedelman.github.io/bopsnbooze/', 
        thumb: '../../assets/martini.png'
    }, 
    {
        name: 'Code Collective', 
        techs: [
            'Node.js', 
            'React', 
            'TailwindUI', 
            'DaisyUI', 
            'GraphQL', 
            'MongoDB', 
            'Mongoose', 
            'Apollo', 
        ], 
        description: 'Mobile first app developed to keep Bootcamp classmates in touch', 
        role: 'All API models and routes, front-end design implementation for main landing/posts page', 
        github: 'https://github.com/jcg0/code-collective-project-3', 
        site: 'https://code-collectives.herokuapp.com', 
        thumb: '../../code.png'
    },
    // {
    //     name: 'Code Collective', 
    //     techs: [
    //         'TBD'
    //     ], 
    //     description: 'Currently working with group to establish user story', 
    //     github: 'TBD', 
    //     site: 'TBD'
    // },
]
function Projects() {
    return (
        <div className="hero min-h-screen" >
            <div className="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0 mx-10">
            <div className='px-2 pt-2'>
                <h1 className='text-3xl font-bold px-3 py-2'>My Projects</h1>
            </div>

                <ProjectItem projects={projects}/>


        </div> 
      </div>
    ); 
};

export default Projects; 