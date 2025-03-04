import Content from "./Content";

const Project01 = () => {
  return (
    <div className="section-container" id="project1">
      <div className="section">
        <div className="section03">
          {/* VPlate */}
          <Content
            description="롱폼을 기반으로한 숏폼 영상 제작 편집기 개발."
            mainImage="/image/vplate_2.webp"
            scopes={[
              "편집기 코어 개발",
              "쇼츠팩토리 관련 유틸리티 기능 일렉트론 앱으로 배포",
              "클라우드 인프라 비용 절감을 위한 로컬 PC 인프라 세팅",
            ]}
            specs={[
              "Frontend: react@19, electron@34, tanstack-query, zustand, vite",
              "Backend: nestjs@9, flask(python), ffmpeg",
              "Style: styled-components, chakra-ui, mui",
              "CI/CD: github-actions",
            ]}
            title="The VPlanet: Shorts Factory"
          />

          {/* VPlate */}
          <Content
            description="자동으로 SNS에 마케팅 영상을 AI로 생성하여 업로드하는 서비스 프론트 개발."
            mainImage="/image/vplate_1.webp"
            scopes={[
              "SNS 자동(예약), 직접 업로드 기능 출시",
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
        </div>
      </div>
    </div>
  );
};

export default Project01;
