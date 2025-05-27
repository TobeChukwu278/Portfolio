import React from 'react';
// import { FaGithub } from 'react-icons/fa';

const projectsData = [
    {
        title: 'API for an E-commerce web app',
        description: 'Developed a robust and scalable RESTful API using Expressjs and mongoDB.',
        techStack: ['Node.js', 'Express', 'PostgreSQL'],
        link: '#', // Add your project link
    },
    {
        title: 'Land page for a Chat app',
        description: 'Built a sleek and modern landpage using tailwind and react',
        techStack: ['React', 'TailwindCSS'],
        link: '#',
    },
    {
        title: 'Agboedo E-commerce app',
        description: 'Developed a scalable web app for alocal store using REACT and Tailwind.',
        techStack: ['React', 'TailwindCSS'],
        link: '#',
    }
    // Add more projects here
];

function Featuredworks() {

    return (
        <section id="projects" className="my-10 py-16 bg-gray-800 pl-2 reveal" >
            <div className="container mx-auto text-center">
                <div className='flex justify-center'>
                    <div className='items-center gap-3 mb-6 flex'>
                        <span className="w-8 h-1 bg-amber-600 rounded"></span>
                        <h2 data-aos="fade-up" className="text-4xl text-amber-600 font-extrabold tracking-wide drop-shadow">My Projects</h2>
                        <span className="w-8 h-1 bg-amber-600 rounded"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div data-aos="fade-up" data-aos-delay='200' key={index} className="bg-gray-700 hover:bg-gray-900 rounded-lg p-6 shadow-md cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="bg-gray-800 text-gray-200 py-1 px-2 rounded-full text-sm">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="text-indigo-400 hover:text-indigo-500">Learn More</a>
                        </div>
                    ))}
                </div>
                {/* <div className="text-center mt-8">
                    <a href="https://github.com/TobeChukwu278" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-gray-300 rounded-full p-3 inline-flex items-center">
                        <FaGithub size={24} className="mr-2" />
                        View All My Projects on GitHub
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default Featuredworks;