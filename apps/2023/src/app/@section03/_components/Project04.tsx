import Content from "./Content";

const Project04 = () => {
  return (
    <div className="section-container" id="project4">
      <div className="section">
        <div className="section03">
          {/* outsourcing */}
          <Content
            description="책 홍보용 정적 웹사이트 개발. 1차 외주에서 이벤트 기간내 누적 사용자수 50만 달성후 2차 외주 계약."
            mainImage="/image/outsourcing.webp"
            scopes={["UI 퍼블리싱", "캐러셀 슬라이드 바닐라코드 개발", "동적 공유이미지", "GA"]}
            specs={["Frontend: javascript, scss, gulp, pug", "Backend: firebase"]}
            title="Outsourcing: 관계유형테스트 / 방구석 골든벨"
          />
        </div>
      </div>
    </div>
  );
};

export default Project04;
