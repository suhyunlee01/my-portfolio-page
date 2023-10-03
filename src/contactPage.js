import React, { useEffect } from 'react';

function ContactPage(){
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
        <div className="contact_app hidden">
            <div className="contact_container">
                <span className="contact_title">이메일</span>
                <span className="contact_body">leesuhyun05505@gmail.com</span><br></br>
                <span className="contact_title">전화번호</span>
                <span className="contact_body">01012345678</span><br></br>
                <span className="contact_title">이력서</span>
                <span className="contact_body"><a href="https://www.notion.so/03938fb4efb545e4b1b89c380794620e">바로가기</a></span><br></br>
                <span className="contact_title">노션</span>
                <span className="contact_body"><a href="https://www.notion.so/03938fb4efb545e4b1b89c380794620e">바로가기</a></span>
            </div>
        </div>
    )
}

export default ContactPage;