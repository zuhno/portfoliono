"use client";

const Project03 = () => {
  return (
    <div className="section-container" id="project3">
      <div className="section">
        <div className="section03">
          {/* Mad Matic */}
          <div className="content">
            <div className="title">Quest3: Mad Matic</div>
            <div className="desc">
              - 네이티브 토큰을 보상으로 주는 일일 추첨 이벤트 페이지 프론트 개발.
            </div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/quest3_1.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>UI 퍼블리싱 및 프론트 기능 개발</li>
                    <li>특정시간에 추첨되는 시스템 개발</li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Backend: nodejs</li>
                    <li>
                      Frontend: next@13(pages router), react@17, react-query, contextAPI, chakraUI
                    </li>
                    <li>CI/CD: github-actions, vercel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Check-in */}
          <div className="content">
            <div className="title">Quest3: Daily Check-in</div>
            <div className="desc">- 게임내 특정 활동을 통한 일일 미션 이벤트 페이지 개발.</div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/quest3_2.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>UI 퍼블리싱 및 프론트 개발</li>
                    <li>DB 스키마 및 rest api 구현</li>
                    <li>디자이너와 의견조율을 통해 디자인 개선</li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Backend: koa, dynamodb</li>
                    <li>
                      Frontend: next@13(pages router), react@17, react-query, contextAPI, chakraUI
                    </li>
                    <li>CI/CD: github-actions, vercel</li>
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

export default Project03;
