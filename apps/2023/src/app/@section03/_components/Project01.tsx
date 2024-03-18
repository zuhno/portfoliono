import Content from "./Content";

const Project01 = () => {
  return (
    <div className="section-container" id="project1">
      <div className="section">
        <div className="section03">
          {/* VPlate */}
          <Content
            description="자동으로 SNS에 마케팅 영상을 AI로 생성하여 업로드하는 서비스 프론트 개발."
            mainImage="/image/vplate_1.webp"
            scopes={[
              "SNS 자동업로드 기능 출시",
              "nextjs 기반 메인페이지 개발",
              "쿠키를 이용한 서브도메인간 로그인 유지 기능 추가",
            ]}
            specs={[
              "Frontend: next@13(pages router), react@18, react-query, contextAPI, zustand",
              "Style: styled-components",
              "CI/CD: github-actions, cloudflare pages",
            ]}
            title="The VPlanet: SNS Upload"
          />

          {/* Quest3: Mad Matic */}
          <Content
            description="네이티브 토큰을 보상으로 주는 일일 추첨 이벤트 페이지 프론트 개발."
            mainImage="/image/quest3_1.webp"
            scopes={[
              "UI 퍼블리싱",
              "티켓 발급, 추첨결과에 따른 프론트 기능 개발",
              "특정시간에 추첨되는 시스템 개발",
            ]}
            specs={[
              "Backend: nodejs",
              "Frontend: next@13(pages router), react@17, react-query, contextAPI, chakraUI",
              "Style: emotion",
              "CI/CD: github-actions, vercel",
            ]}
            title="Quest3: Mad Matic"
          />
        </div>
      </div>
    </div>
  );
};

export default Project01;
