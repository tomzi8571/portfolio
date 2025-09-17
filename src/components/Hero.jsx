import React from 'react'

export default function Hero() {
    return (
        <div className="text-center sm:text-left py-8">
            <h1 className="text-4xl sm:text-5xl text-primary font-extrabold leading-tight">
                {/*{site.name}*/}
                {/*Enterprise Full Stack Engineer*/}
                Full stack engineering for enterprise scale.
                <span className="block text-primary text-7xl sm:text-3xl mt-3 ">
                    {/*Enterprise Full Stack Engineer*/}
                </span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-base-content/80 max-w-xl mx-auto sm:mx-0">
                I design and deliver scalable, cloud-ready, and microservice-friendly platforms using modern backend and frontend stacks — powered by sophisticated CI/CD pipelines and built for Agile environments.
            </p>
            <div className="mt-6 flex flex-col justify-center sm:justify-start gap-3">
                Explore my projects, download my resume, or reach out for collaboration.
                <a href="#contact" title="Contact me" className="btn-link hover:text-primary flex justify-center  sm:justify-start items-center gap-0">
                    <svg aria-label="Email icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         strokeLinecap="1"
                         stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                    </svg>

                </a>
                {/*<a href="/Thomas Zillinger Resume 2025.pdf" title="Download my resume"*/}
                {/*   target="_blank" rel="noopener noreferrer"*/}
                {/*   className="btn-link hover:text-primary flex items-center gap-0">*/}
                {/*    <svg aria-label="Resume" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*         stroke-width="1"*/}
                {/*         stroke="currentColor" className="size-5">*/}
                {/*        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
            </div>
            <div className="mt-6">

            </div>
            {/*<div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">*/}
            {/*    <img src="/icons/cloud.svg" alt="Cloud" className="h-4"/>*/}
            {/*    <img src="/icons/cicd.svg" alt="CI/CD" className="h-4"/>*/}
            {/*    <img src="/icons/microservices.svg" alt="Microservices" className="h-4"/>*/}
            {/*    <img src="/icons/rest.svg" alt="REST" className="h-4"/>*/}
            {/*    <img src="/src/assets/react.svg" alt="React" className="h-4"/>*/}
            {/*</div>*/}

        </div>
    )
}
