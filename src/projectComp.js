import cocktaildiy from './img/Mainpage2.jpg';

function ProjectComp(){

    return(
        <div>
            <div className='project_contents'>
                <div className='project_info'>
                  <h4 className='project_info_header'>Cocktail DIY</h4>
                  <div className='tag_container'>
                    <span className='tag'>Javascript</span>
                    <span className='tag'>HTML</span>
                    <span className='tag'>CSS</span>
                  </div>
                  <div className='tag_container'>
                    <span className='tag'>Cocktail DB</span>
                    <span className='tag'>FIGMA</span>
                  </div>
                  <div className='project_info_body'>
                    <p>Cocktail DIY는 집에서 누구나 만들 수 있는 칵테일레시피를 검색할 수 있는 웹사이트입니다.그 뿐 아니라 사용자가 개발한 레시피를 저장하고, 과음 방지 게임도 즐길 수 있습니다.</p>
                    <p>기간: 2023-07-30  ~ 2023-10-03</p>
                  </div>
                  <a href='https://github.com/suhyunlee01/Cocktail_DIY'>
                    <button className='btn_radius btnHover'>프로젝트 바로가기</button>
                  </a>
                </div>
                <div className='project_img'>
                  <img className='project_img_src' src={cocktaildiy}></img>
                </div>
              </div>
        </div>
    )
}

export default ProjectComp;