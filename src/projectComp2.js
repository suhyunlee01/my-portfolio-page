import myEverything from './img/MYeverything.png';

function ProjectComp2(){

    return(
        <div>
            <div className='project_contents'>
                <div className='project_img2'>
                  <img className='project_img_src' src={myEverything}></img>
                </div>
                <div className='project_info2'>
                  <h4 className='project_info_header'>MY EVERYTHING</h4>
                  <div className='tag_container'>
                    <span className='tag'>C#</span>
                    <span className='tag'>.Net</span>
                    <span className='tag'>MY SQL</span>
                    <span className='tag'>FIGMA</span>
                  </div>
                  <div className='project_info_body'>
                    <p>MY EVERYTHING은 오늘의 할 일, 오늘의 날씨를 파악하고 하루의 모든 것을 계획할 수 있도록 돕는 어플리케이션입니다.</p>
                    <p>기간: 2023-08-30  ~  2023-09-07</p>
                  </div>
                  <a href='https://github.com/suhyunlee01/My__Everything'>
                    <button className='btn_radius btnHover'>프로젝트 바로가기</button>
                  </a>
                </div>
              </div>
        </div>
    )
}

export default ProjectComp2;