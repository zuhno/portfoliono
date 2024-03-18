import Content from "./Content";

const Project03 = () => {
  return (
    <div className="section-container" id="project3">
      <div className="section">
        <div className="section03">
          {/* MW: Presale */}
          <Content
            description="블록체인게임 캐릭터 코스튬 사전판매 프론트 개발."
            mainImage="/image/metaverse_world2.webp"
            scopes={[
              "퍼블리셔분과 협업하여 특정 UI 퍼블리싱",
              "블록체인과 rpc 통신하여 구매/교환 기능 구현",
              "구매한 코스튬박스 뽑기(가챠)시 연출 기획 및 개발",
            ]}
            specs={[
              "Framework: next@12, react@17",
              "State Management: recoil",
              "Style: emotion, sass",
              "CI/CD: github-actions, serverless-component(AWS)",
            ]}
            title="Metaverse World: Presale"
          />

          {/* itamgames: Bridge */}
          <Content
            description="블록체인 네트워크간 자사 거버넌스 토큰을 교환해주는 브릿지 서비스 리뉴얼."
            mainImage="/image/itamgames1.webp"
            scopes={[
              "UI 퍼블리싱",
              "기존 브릿지 기능 마이그레이션 및 리펙토링",
              "대기상태인 교환이력들 Infinity scroll에서 Pagination 적용된 리스트로 개선",
            ]}
            specs={[
              "Library: react@16",
              "State Management: contextAPI",
              "Style: sass, styled-components",
              "CI/CD: github-actions, AWS CodePipeline",
            ]}
            title="Metaverse World: Token Bridge"
          />
        </div>
      </div>
    </div>
  );
};

export default Project03;
