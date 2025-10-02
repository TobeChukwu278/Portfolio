import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTools } from 'react-icons/fa';

const projectsData = [
    {
        title: 'E-commerce REST API',
        description: "Developed a scalable RESTful API for an e-commerce platform using Express.js and MongoDB with features like adding a product, deleting a product, and editing existing product's detail.",
        detailedDescription: `
            <h3>Project Overview</h3>
            <p>Timeify is a simple yet fully functional CRUD application that demonstrates backend-driven product management. It allows users to upload products, edit existing entries, and delete them from the catalog in real time. The interface is intentionally designed to be minimal and intuitive, so anyone can interact with the catalog without needing an admin panel or user authentication.</p>
            <ul>
                <li> Add Products – Upload new product details and instantly see them in the catalog.</li>
                <li> Edit Products – Update existing product information with ease.</li>
                <li>Delete Products – Remove unwanted products from the catalog.</li>
                <li> Dynamic Catalog – Products are displayed immediately after CRUD operations.</li>
                <li>Clean UI/UX – User-friendly design for straightforward interaction.</li>
            </ul>
            <h3>What I Did:</h3>
            <ul>
                <li>Built backend APIs to handle full CRUD operations (Create, Read, Update, Delete).
</li>
                <li>Integrated React frontend with REST API endpoints for seamless interaction.
</li>
                <li>Styled the interface with Chakra UI for clarity and ease of use.</li>
                <li>Deployed both frontend and backend on Render for public access.</li>
            </ul>
        `,
        techStack: ['Node.js', 'Express', 'MongoDB', 'REST API'],
        link: 'https://timeify.onrender.com/',
        github: 'https://github.com/TobeChukwu278/TimeCart.git',
        demo: 'https://timeify.onrender.com/',
        inProgress: false,
        images: [
            '/crudApp.png'
        ]
    },
    {
        title: 'Chat App Landing Page',
        description: 'Built a sleek and modern landing page for a chat application using React and TailwindCSS with responsive design and smooth animations.',
        detailedDescription: `
            <h3>Project Overview</h3>
            <p>A modern, responsive landing page designed to showcase a chat application's features and drive user conversions.</p>
            <ul>
                <li>Fully responsive design that works on all devices</li>
                <li>Smooth scroll animations and hover effects</li>
                <li>Optimized for fast loading and SEO</li>
                <li>Clean and modern UI/UX design</li>
            </ul>
            <h3>Technical Highlights</h3>
            <ul>
                <li>Built with React functional components and hooks</li>
                <li>TailwindCSS for utility-first styling</li>
                <li>React Intersection Observer for scroll animations</li>
                <li>Deployed on Vercel for optimal performance</li>
            </ul>
        `,
        techStack: ['React', 'TailwindCSS', 'JavaScript', 'Vercel'],
        link: 'https://gchat-landpage.vercel.app/',
        github: 'https://github.com/TobeChukwu278/gchat-landpage.git',
        demo: 'https://gchat-landpage.vercel.app/',
        inProgress: false,
        images: [
            'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
            'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        ]
    },
    {
        title: 'Agboedo E-commerce Store',
        description: 'Developing a land page  e-commerce web application for a local store with shopping cart, user accounts, and payment integration.',
        detailedDescription: `
            <h3>Project Overview</h3>
            <p>A comprehensive e-commerce solution for a local store, providing customers with a seamless online shopping experience.</p>
            <ul>
                <li>Product catalog with search and filtering</li>
                <li>Shopping cart and wishlist functionality</li>
                <li>User authentication and profile management</li>
                <li>Order tracking and history</li>
                <li>Payment gateway integration</li>
                <li>Admin panel for inventory management</li>
            </ul>
            <h3>Current Development Status</h3>
            <p>This project is currently in active development. Features being worked on:</p>
            <ul>
                <li>Payment integration with Stripe</li>
                <li>User review and rating system</li>
                <li>Advanced product filtering</li>
                <li>Email notifications</li>
            </ul>
        `,
        techStack: ['React', 'TailwindCSS', 'Context API', 'Node.js', 'MongoDB'],
        link: 'https://agboedo-comm.vercel.app/',
        github: 'https://github.com/TobeChukwu278/Agboedo-comm.git',
        demo: 'https://agboedo-comm.vercel.app/',
        inProgress: true,
        images: [
            '/agboedo.png'
        ]
    },
    {
        title: 'React Todo Application',
        description: 'Building an advanced todo application with features like drag-and-drop, categories, and persistent storage.',
        detailedDescription: `
            <h3>Project Overview</h3>
            <p>An enhanced todo application that goes beyond basic task management with advanced features and a beautiful interface.</p>
            <ul>
                <li>Create, edit, and delete tasks</li>
                <li>Organize tasks by categories and priorities</li>
                <li>Drag and drop functionality for task reordering</li>
                <li>Due dates and reminders</li>
                <li>Dark/light theme support</li>
                <li>Data persistence with local storage</li>
            </ul>
            <h3>Current Development Status</h3>
            <p>Active development focusing on:</p>
            <ul>
                <li>Implementing drag-and-drop functionality</li>
                <li>Adding task categories and tags</li>
                <li>Creating a statistics dashboard</li>
            </ul>
        `,
        techStack: ['React', 'TailwindCSS', 'Local Storage', 'React DnD'],
        link: 'https://react-todo-app-navy-three.vercel.app/',
        github: 'https://github.com/TobeChukwu278/React-Todo-App',
        demo: 'https://mobile-number-validator.vercel.app/',
        inProgress: true,
        images: [
            '/todo.png'
        ]
    },
    {
        title: 'CBT Innovation application',
        description: 'CBT Innovation Platform helps you manage and track cognitive behavioral therapy progress with modern tools and insights.',
        detailedDescription: `
            <h3>Project Overview</h3>
            <p>rack and improve your CBT journey with the CBT Innovation Platform. Modern tools for therapists and clients.</p>
            <ul>
                <li>Create, edit, and delete tasks</li>
                <li>Organize tasks by categories and priorities</li>
                <li>Drag and drop functionality for task reordering</li>
                <li>Due dates and reminders</li>
                <li>Dark/light theme support</li>
                <li>Data persistence with local storage</li>
            </ul>
            <h3>Current Development Status</h3>
            <p>Active development focusing on:</p>
            <ul>
                <li>Implementing drag-and-drop functionality</li>
                <li>Adding task categories and tags</li>
                <li>Creating a statistics dashboard</li>
            </ul>
        `,
        techStack: ['React', 'TailwindCSS', 'Local Storage', 'React DnD'],
        link: 'https://react-todo-app-navy-three.vercel.app/',
        github: 'https://github.com/TobeChukwu278/React-Todo-App',
        demo: 'https://mobile-number-validator.vercel.app/',
        inProgress: true,
        images: [
            '/cbtAdmin.png',
            '/cbtUsers.png'
        ]
    }
];

function ProjectCard({ project, index, onProjectClick }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="bg-gray-700 hover:bg-gray-900 rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 relative group"
            onClick={() => onProjectClick(project)}
        >
            {/* In Progress Badge */}
            {project.inProgress && (
                <div className="absolute -top-2 -right-2">
                    <span className="bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                        <FaTools size={10} />
                        In Progress
                    </span>
                </div>
            )}

            {/* Project Image Preview */}
            {project.images && project.images.length > 0 && (
                <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            )}

            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="bg-gray-800 text-gray-200 py-1 px-3 rounded-full text-sm border border-gray-600"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 pt-2 border-t border-gray-600">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub className="mr-2" />
                        Code
                    </a>
                )}
                {project.demo && project.demo !== '#' && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                    </a>
                )}
            </div>

            {/* Click hint */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-gray-400">Click for details</span>
            </div>
        </div>
    );
}

function ProjectModal({ project, isOpen, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-800 rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                            {project.inProgress && (
                                <span className="bg-amber-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full inline-flex items-center gap-2">
                                    <FaTools size={12} />
                                    Currently in Development
                                </span>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white text-2xl font-bold transition-colors bg-gray-700 hover:bg-gray-600 w-8 h-8 rounded-full flex items-center justify-center"
                        >
                            ×
                        </button>
                    </div>

                    {/* Image Gallery */}
                    {project.images && project.images.length > 0 && (
                        <div className="mb-6">
                            <div className="relative rounded-lg overflow-hidden bg-gray-900">
                                <img
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-64 md:h-96 object-cover"
                                />

                                {/* Navigation Arrows */}
                                {project.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                        >
                                            ‹
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                        >
                                            ›
                                        </button>
                                    </>
                                )}

                                {/* Image Counter */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </div>

                            {/* Thumbnail Navigation */}
                            {project.images.length > 1 && (
                                <div className="flex gap-2 mt-4 overflow-x-auto py-2">
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index
                                                ? 'border-amber-500 ring-2 ring-amber-500'
                                                : 'border-gray-600 hover:border-gray-400'
                                                }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <div className="bg-gray-700 rounded-lg p-6 mb-4">
                                <h3 className="text-xl font-semibold text-amber-400 mb-4">Project Description</h3>
                                <div
                                    className="text-gray-300 prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-gray-700 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-amber-400 mb-4">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg text-sm border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-700 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-amber-400 mb-4">Project Links</h4>
                                <div className="space-y-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-300 hover:text-white transition-colors bg-gray-800 hover:bg-gray-600 p-3 rounded-lg"
                                        >
                                            <FaGithub className="mr-3 text-xl" />
                                            <div>
                                                <div className="font-medium">View Source Code</div>
                                                <div className="text-sm text-gray-400">GitHub Repository</div>
                                            </div>
                                        </a>
                                    )}
                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-white hover:text-amber-300 transition-colors bg-amber-600 hover:bg-amber-500 p-3 rounded-lg"
                                        >
                                            <FaExternalLinkAlt className="mr-3 text-xl" />
                                            <div>
                                                <div className="font-medium">Live Demo</div>
                                                <div className="text-sm text-amber-100">Visit Live Project</div>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-700">
                        <button
                            onClick={onClose}
                            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                        >
                            Close Project
                        </button>
                        {project.demo && project.demo !== '#' && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-flex items-center"
                            >
                                <FaExternalLinkAlt className="mr-2" />
                                Visit Live Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeaturedWorks() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Reset image index when closing
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section id="projects" className="py-20 bg-gray-800 reveal">
            <div className="container mx-auto px-4">
                <div className='flex justify-center mb-16'>
                    <div className='flex items-center gap-4'>
                        <span className="w-12 h-1 bg-amber-600 rounded"></span>
                        <h2
                            data-aos="fade-up"
                            className="text-4xl md:text-5xl text-amber-600 font-bold tracking-wide"
                        >
                            Featured Projects
                        </h2>
                        <span className="w-12 h-1 bg-amber-600 rounded"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            onProjectClick={handleProjectClick}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/TobeChukwu278"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                        <FaGithub size={20} />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}

export default FeaturedWorks;