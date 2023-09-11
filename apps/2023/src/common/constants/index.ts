export const companiesCoordinate = {
  "nomad-coders": { lat: 37.693291, lng: 126.765383 },
  itamgames: { lat: 37.497303, lng: 127.024486 },
  "metaverse-world": { lat: 37.502655, lng: 127.036428 },
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
      stylers: [{ color: "#d59563" }],
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
    description: "살아온 인생중 운빨 비율",
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
