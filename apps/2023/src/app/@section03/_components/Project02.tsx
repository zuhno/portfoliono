import Content from "./Content";

const Project02 = () => {
  return (
    <div className="section-container" id="project2">
      <div className="section">
        <div className="section03">
          {/* Quest3: Daily Check-in */}
          <Content
            description="게임내 특정 활동을 통한 일일 미션 이벤트 페이지 개발."
            mainImage="/image/quest3_2.webp"
            scopes={[
              "UI 퍼블리싱 및 프론트 기능 개발",
              "DB 스키마 및 rest api 구현",
              "디자이너와 의견조율을 통해 디자인 개선",
            ]}
            specs={[
              "Backend: koa.js, dynamodb",
              "Frontend: next@13(pages router), react@17, react-query, contextAPI, chakraUI, emotion, github-actions, vercel",
            ]}
            title="Quest3: Daily Check-in"
          />

          {/* MW: Daily Check-in */}
          <Content
            description="블록체인게임 오픈전 게임 아이템을 일일 보상으로 주는 이벤트 페이지 프론트 개발."
            mainImage="/image/metaverse_world1.webp"
            scopes={[
              "UI 퍼블리싱",
              "메인 홈페이지에 보여질 UI 및 런처프로그램에서 띄워질 webview 화면 개발",
              "일일 보상 claim 기능 구현",
            ]}
            specs={[
              "next@12, react@17, recoil, emotion, github-actions, serverless-component(AWS)",
            ]}
            title="Metaverse World: Daily Check-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Project02;
