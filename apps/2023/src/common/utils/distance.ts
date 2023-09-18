interface IProps {
  lat1: number;
  lng1: number;
  lat2: number;
  lng2: number;
}

export const haversine = ({ lat1, lng1, lat2, lng2 }: IProps) => {
  // 지구의 반지름 (평균값, 단위: km)
  const R = 6371.0;

  // 위도 및 경도를 라디안 단위로 변환
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lng1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lng2 * Math.PI) / 180;

  // 위도 및 경도 차이 계산
  const dlat = lat2Rad - lat1Rad;
  const dlon = lon2Rad - lon1Rad;

  // Haversine 공식 적용
  const a =
    Math.sin(dlat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};
