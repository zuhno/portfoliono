import ModelContainer from "./_components/ModelContainer.client";
import RoomModel from "./_components/RoomModel.client";
import SectionContainer from "./_components/SectionContainer.client";

export default function Home() {
  return (
    <>
      <SectionContainer>
        <div style={{ height: "300%", backgroundColor: "green" }} />
      </SectionContainer>
      <SectionContainer>
        <div style={{ height: "100%", backgroundColor: "red" }} />
      </SectionContainer>
      <SectionContainer>
        <ModelContainer cameraNear={0.1} cameraPosition={[10, 6, 10]}>
          <RoomModel />
        </ModelContainer>
      </SectionContainer>
    </>
  );
}
