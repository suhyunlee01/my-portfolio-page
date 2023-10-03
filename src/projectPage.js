import ProjectComp from './projectComp';
import ProjectComp2 from './projectComp2';
import React, { useEffect } from 'react';

function ProjectPage(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((el) => observer.observe(el));
    }, []);

    return(
        <>
            <div className='body_container'>
                <div className='project_header_container2'>
                    <h1 className='project_header'>Projects</h1>
                    <div className='hr'></div>
                </div>
                <div className='hidden'>
                    <ProjectComp></ProjectComp>
                </div>
                <div className='hidden'>
                    <ProjectComp2></ProjectComp2>
                </div>
            </div>
        </>
    )
}
export default ProjectPage;