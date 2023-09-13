export const companiesCoordinate = {
  "nomad-coders": { lat: 37.693291, lng: 126.765383 },
  itamgames: { lat: 37.497303, lng: 127.024486 },
  "metaverse-world": { lat: 37.49938619005661, lng: 127.03382608876949 },
  quest3: { lat: 37.499493264043, lng: 127.02900264553 },
};

export type CompaniesCoordinate = (typeof companiesCoordinate)["nomad-coders"];

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

export const stats = [
  {
    id: "stat-hp",
    label: "HP",
    description: "요근래 체력량",
    value: 850,
    max: 1000,
  },
  {
    id: "stat-str",
    label: "STR",
    description: "개발할때 사용할 수 있는 근육량",
    value: 77,
    max: 100,
  },
  {
    id: "stat-dex",
    label: "DEX",
    description: "기능구현까지의 민첩성",
    value: 64,
    max: 100,
  },
  {
    id: "stat-int",
    label: "INT",
    description: "좀더 쉽게 살기위한 잔머리",
    value: 83,
    max: 100,
  },
  {
    id: "stat-luk",
    label: "LUK",
    description: "살아온 인생중 운빨량",
    value: 45,
    max: 100,
  },
  {
    id: "stat-atk",
    label: "ATK",
    description: "흉흉한 시대에 살아남기 위한 공격력",
    value: 88,
    max: 100,
  },
  {
    id: "stat-def",
    label: "DEF",
    description: "험난한 시대에 살아남기 위한 방어력",
    value: 65,
    max: 100,
  },
];

export const careerHistory = {
  "nomad-coders":
    "Nomad Coders lecture\n\n2019.12 ~ 2021.08\n\npublishing, reactjs, typescript, nodejs 공부.\n\n코로나 발발후 알바와 공부를 병행하며 약 3년간 독학.",
  itamgames:
    "Itamgames Corp.\n\n2021.09 ~ 2021.12\n\n게임에 블록체인을 붙이기위한 미들웨어 서비스 제공.\n\n기술 스택\n\n- react@16, sass + emotion, contextAPI\n\n개발 내역\n\n- 네트워크간 토큰을 스왑시키는 브릿지 서비스 프론트 개발\n\n- 스테이킹풀(토큰 및 게임아이템 예치) 서비스 프론트 개발\n\n- 마이페이지 > 리스트 가상스크롤로 성능 최적화",
  "metaverse-world":
    "Metaverse World Corp.\n\n2022.01 ~ 2022.10\n\n블록체인 생태계 개발 및 제공.\n\n기술 스택\n\n- react@17, next@12, emotion, recoil\n\n개발 내역\n\n- 마이페이지, NFT 상세페이지, 메인페이지, NFT 거래 리스트 페이지 등등\n\n- 자체 웹지갑과 ERC기반 지갑 라이브러리를 같이 사용하기위한 기능 추상화\n\n- 런처프로그램 내 웹뷰간 통신을 위한 규격 개발 및 유지보수\n\n- 홈페이지 리뉴얼 프로젝트 기초작업\n\n- i18n을 사용한 국제화 작업",
  quest3:
    "Quest3 Corp.\n\n2022.12 ~ 2023.06\n\n블록체인게임 외주.\n\n기술 스택\n\n- react@18, next@13(pages router), chakraUI, recoil + contextAPI\n\n개발 내역\n\n- 이벤트 리스트 페이지 프론트 개발\n\n- 게임 데이터를 연동한 일일미션 페이지 프론트 개발\n\n- 메일 구독 및 메일 발송 어드민 개발\n\n- 룰렛 및 추첨 이벤트 페이지 프론트 개발\n\n- 게임 전적페이지 프론트 개발",
};
