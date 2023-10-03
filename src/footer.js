import footerImgSrc from './img/footer.png';
import EmailIcon from './img/emailIcon.png';
import GitHubIcon from './img/githubIcon.png';
import LinkedInIcon from './img/linkedinICON.png';
import NotionIcon from './img/notionLOGO.png';
import React, { useEffect } from 'react';

function Footer(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }
            });
        });
        const elements = document.querySelectorAll('.hidden2');
        elements.forEach((el) => observer.observe(el));
    }, []);

    return(
        <div className='footerContainer hidden2'>
            <div className="btnContacts">
               <div>
                <a href='/contact'>
                    <button className='btnContact'><img src={EmailIcon}></img></button>
                </a>
                <a href='https://www.notion.so/s-Road-map-1653b2f970b34e31b6b23c58c5405c30'>
                    <button className='btnContact'><img className='notionIcon' src={NotionIcon}></img></button>
                </a>
                <a href='https://github.com/suhyunlee01'>
                    <button className='btnContact'><img src={GitHubIcon}></img></button>
                </a>
               </div>
                <span className='footerText'>SUHYUN LEE 2023</span>
            </div>
            <div className="footerImg">
                <img className='footerImgSrc' src={footerImgSrc}></img>
            </div>
        </div>
    )
}

export default Footer;