"use client";

const Project02 = () => {
  return (
    <div className="section-container" id="project2">
      <div className="section">
        <div className="section03">
          {/* Daily Check-in */}
          <div className="content">
            <div className="title">Metaverse World: Daily Check-in</div>
            <div className="desc">
              - 블록체인게임 오픈전 게임 아이템을 일일 보상으로 주는 이벤트 페이지 프론트 개발.
            </div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/metaverse_world1.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>UI 퍼블리싱</li>
                    <li>메인 홈페이지에 보여질 UI 및 런처프로그램에서 띄워질 webview 화면 개발</li>
                    <li>일일 보상 기능 구현</li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Framework: next@12, react@17</li>
                    <li>State Management: recoil</li>
                    <li>Style: emotion</li>
                    <li>CI/CD: github-actions, serverless-component(AWS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Presale */}
          <div className="content">
            <div className="title">Metaverse World: Presale</div>
            <div className="desc">- 블록체인게임 캐릭터 코스튬 사전판매 프론트 개발.</div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/metaverse_world2.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>퍼블리셔분과 협업하여 특정 UI 퍼블리싱</li>
                    <li>블록체인과 rpc 통신하여 구매/교환 기능 구현</li>
                    <li>구매한 코스튬박스 뽑기(가챠)시 연출 기획 및 개발</li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Framework: next@12, react@17</li>
                    <li>State Management: recoil</li>
                    <li>Style: emotion, sass</li>
                    <li>CI/CD: github-actions, serverless-component(AWS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project02;
