import Row from 'react-bootstrap/Row';
import bgimg from './img/프로필IMG.png';
import ProjectComp from './projectComp';
import ProjectComp2 from './projectComp2';
import Container from 'react-bootstrap/Container';
import React, { useEffect } from 'react';

function MainPage(){
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
        <>
            <Container>
                <Row>
                    <div className='header_img'>
                        <img src={bgimg}></img>
                    </div>

                    <div className='header_left hidden'>
                        <header className='header_left_intro'>Junior Developer</header>
                        <header className='header_left_introduce'>안녕하세요,</header>
                        <header className='header_left_introduce'>이수현입니다.</header>
                        <div className='header_left_introduce_body_container'>
                            <span className='header_left_introduce_body'>안녕하세요, 노력하고 성장하는 개발자 이수현입니다.</span><br></br>
                            <span className='header_left_introduce_body'>비즈니스, 인터렉션, UX에 대해 함께 고민합니다.</span><br></br>
                            <span className='header_left_introduce_body'>기록과 문서화, 커뮤니케이션을을 좋아합니다.</span>
                        </div>
                        <div className='btn_header_container'>
                            <a href='/contact'>
                                <button className='btn_header btnHover'>연락처</button>
                            </a>
                            <a href='https://github.com/suhyunlee01'>
                                <button className='btn_header btnHover'>깃허브 바로가기</button>
                            </a>
                        </div>
                    </div>

                    <div className='body_container'>
                        <div className='project_header_container'>
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
                </Row>
            </Container>
        </>
    )
}

export default MainPage;