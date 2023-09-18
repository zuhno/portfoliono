"use client";

const Project01 = () => {
  return (
    <div className="section-container" id="project1">
      <div className="section">
        <div className="section03">
          {/* Bridge */}
          <div className="content">
            <div className="title">Itamgames: Token Bridge</div>
            <div className="desc">
              - 블록체인 네트워크간 자사 거버넌스 토큰을 교환해주는 브릿지 서비스 리뉴얼.
            </div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/itamgames1.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>UI 퍼블리싱</li>
                    <li>기존 브릿지 기능 마이그레이션 및 리펙토링</li>
                    <li>
                      대기상태인 교환이력들 Infinity scroll에서 Pagination 적용된 리스트로 개선
                    </li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Library: react@16</li>
                    <li>State Management: contextAPI</li>
                    <li>Style: sass, styled-components</li>
                    <li>CI/CD: AWS S3, Cloudfront, CodePipeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Staking */}
          <div className="content">
            <div className="title">Itamgames: Staking Pool</div>
            <div className="desc">
              - 게임 아이템을 예치하여 토큰을 이자로 얻는 스테이킹 프론트 개발.
            </div>
            <div className="info">
              <div className="image">
                {/* eslint-disable-next-line @next/next/no-img-element -- . */}
                <img alt="project_img" src="/image/itamgames2.webp" />
              </div>
              <div className="history">
                <div>
                  <p>참여 범위</p>
                  <ul>
                    <li>UI 퍼블리싱</li>
                    <li>블록체인과 rpc 통신하여 예금/출금기능 구현</li>
                  </ul>
                </div>
                <div>
                  <p>기술 스택</p>
                  <ul>
                    <li>Library: react@16</li>
                    <li>State Management: contextAPI</li>
                    <li>Style: styled-components</li>
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

export default Project01;
