import ProfilePic from './img/profilePic.png';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useEffect } from 'react';

function AboutPage(){
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
        <Container>
            <Row>
                <div className='profileContainer'>
                    <div className='header_left hidden'>
                        <header className='header_left_introduce'>저를 소개합니다.</header>
                        <div className='header_left_introduce_body_container'>
                            <span className='header_left_introduce_body'>안녕하세요, 노력하고 성장하는 개발자 이수현입니다.</span><br></br>
                            <span className='header_left_introduce_body'>비즈니스, 인터렉션, UX에 대해 함께 고민합니다.</span><br></br>
                            <span className='header_left_introduce_body'>다양한 직군에 대한 이해도를 기반으로 협업합니다.</span><br></br>
                            <span className='header_left_introduce_body'>기록과 문서화, 커뮤니케이션을을 좋아합니다.</span>
                        </div>
                        <div className='btn_header_container'>
                            <button className='btn_header btnHover'><div>이력서</div><div> 확인하기</div></button>
                            <a href='https://jewel-woodpecker-781.notion.site/636111bab4fc46d194f76daf1097bf76'><button className='btn_header btnHover'><div>공부 기록</div><div> 구경하기</div></button></a>
                            <a href='https://github.com/suhyunlee01'>
                                <button className='btn_header btnHover'><div>깃허브</div><div> 바로가기</div></button>
                            </a>
                        </div>
                    </div>
                    <div className='profileImg'>
                        <img src={ProfilePic}></img>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default AboutPage;