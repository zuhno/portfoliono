export const companiesCoordinate = {
  "nomad-coders": { lat: 37.693291, lng: 126.765383 },
  "metaverse-world": { lat: 37.49938619005661, lng: 127.03382608876949 },
  quest3: { lat: 37.499493264043, lng: 127.02900264553 },
  "the-vplanet": { lat: 37.5535569605072, lng: 126.92748883625045 },
};

export type CompaniesCoordinate = (typeof companiesCoordinate)["quest3"];

export const googleMapDarkThemeConfig = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "landscape.man_made.building",
      elementType: "geometry.fill",
      stylers: [{ color: "#414e5e" }],
    },
    {
      featureType: "landscape.man_made.building",
      elementType: "geometry.stroke",
      stylers: [{ color: "#6e757e" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "poi.business",
      elementType: "labels.icon",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "poi.business",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ],
};

export const googleMapLightThemeConfig = {
  styles: [
    {
      featureType: "poi.business",
      elementType: "labels.icon",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "poi.business",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
  ],
};

export const stats = [
  {
    id: "stat-hp",
    label: "HP",
    description: "체력량",
    value: 850,
    max: 1000,
  },
  {
    id: "stat-str",
    label: "STR",
    description: "정신근육",
    value: 77,
    max: 100,
  },
  {
    id: "stat-dex",
    label: "DEX",
    description: "작업속도",
    value: 64,
    max: 100,
  },
  {
    id: "stat-int",
    label: "INT",
    description: "잔머리",
    value: 83,
    max: 100,
  },
  {
    id: "stat-luk",
    label: "LUK",
    description: "운빨량",
    value: 45,
    max: 100,
  },
  {
    id: "stat-atk",
    label: "ATK",
    description: "살아남기 위한 공격력",
    value: 88,
    max: 100,
  },
  {
    id: "stat-def",
    label: "DEF",
    description: "살아남기 위한 방어력",
    value: 65,
    max: 100,
  },
];

export const careerHistory = {
  "the-vplanet": "The VPlanet Corp. (2024.01 ~ current)\n\n근무중😊",
  quest3:
    "Quest3 Corp. (2022.12 ~ 2023.06)\n\n어드민, 게임연동 일일 이벤트, 추첨형식 이벤트, zealy 서비스와 연동한 미션 완료 자동화 등의 작업을 진행하였습니다.\n\n프로젝트중 백엔드에도 참여한 경험이 http 통신에 대한 생각을 넓히는데 도움이 많이 되었습니다.",
  "metaverse-world":
    "Metaverse World Corp. (2021.09 ~ 2022.11)\n\n사전판매, 일일 이벤트, NFT 마켓플레이스, 자사 웹지갑 연동을 위해 라이브러리를 추상화하여 기능 구현, 프론트팀의 멀티레포를 모노레포로 마이그레이션, 국제화 등의 작업을 진행하였습니다.\n\n타 직군의 사람들과 협업, 개발팀 주간회의를 통한 기술 공유 및 동기부여를 경험하였습니다. 또 저년차임에도 신입개발자를 케어하는 임무를 수행함으로써 안티 선임개발자의 자세를 배웠습니다.",
  "nomad-coders":
    "Nomad Coders lecture (2019.12 ~ 2021.08)\n\njavascript, typescript, react, react-native, nodejs, graphql, mongodb, postgresql 등을 학습하였고 퍼블리싱, 프론트 프레임워크 기반 웹앱, RN기반 앱 등의 프로젝트를 진행하였습니다.\n\npython 서적을 통한 공부, 국비학원 상담을 거쳐 노마드코더가 개발을 배우는데 가장 효율적이라고 생각하여 수강하게되었습니다. 독학의 기간을 길게 잡은 감이 있었지만 제 수준을 곱씹어볼 수 있었던 시간이었습니다.",
};

export const GTM_ID = "GTM-TCTRHF2R";
