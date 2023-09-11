"use client";

import GoogleMapReact from "google-map-react";
import { useState, useEffect, useCallback } from "react";

import {
  type CompaniesCoordinate,
  companiesCoordinate,
  googleMapDarkThemeConfig,
} from "@common/constants";

import homeStyles from "../../_styles/home.module.scss";

interface IProps {
  toHome: boolean;
  toItam: boolean;
  toMW: boolean;
  toLab: boolean;
}

const GoogleMapContainer = ({ toHome, toItam, toMW, toLab }: IProps) => {
  const [coordinate, setCoordinate] = useState<CompaniesCoordinate>(
    companiesCoordinate["nomad-coders"]
  );
  const [zoom, setZoom] = useState(20);

  const renderMarker = useCallback(({ map, maps }) => {
    Object.entries(companiesCoordinate).forEach(([key, value]) => {
      // eslint-disable-next-line no-new -- .
      new maps.Marker({
        position: {
          lat: value.lat,
          lng: value.lng,
        },
        map,
        title: key,
      });
    });
  }, []);

  function* zoomGenerateSequence(type: "increase" | "decrease") {
    const limit = 3;
    const increment = 0.1;

    const promises: any[] = [];
    for (
      let i = type === "increase" ? 0 : limit;
      type === "increase" ? i <= limit : i >= 0;
      type === "increase" ? (i += increment) : (i -= increment)
    ) {
      promises.push(
        yield new Promise((r) => {
          setTimeout(() => r(setZoom(20 - i)), i * 10);
        })
      );
    }

    return Promise.all(promises);
  }

  const zoomOut = async () => {
    const sequence = zoomGenerateSequence("increase");
    for await (const _ of sequence) continue;
  };

  const zoomIn = async () => {
    const sequence = zoomGenerateSequence("decrease");
    for await (const _ of sequence) continue;
  };

  const onFlight = async (to: CompaniesCoordinate) => {
    await zoomOut();
    setCoordinate(to);
    await zoomIn();
  };

  useEffect(() => {
    if (toHome) onFlight(companiesCoordinate["nomad-coders"]).catch(() => {});
    if (toItam) onFlight(companiesCoordinate.itamgames).catch(() => {});
    if (toMW) onFlight(companiesCoordinate["metaverse-world"]).catch(() => {});
    if (toLab) onFlight(companiesCoordinate.quest3).catch(() => {});
  }, [toHome, toItam, toMW, toLab]);

  return (
    <div className={homeStyles["map-container"]}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        center={coordinate}
        defaultCenter={companiesCoordinate["nomad-coders"]}
        defaultZoom={20}
        onGoogleApiLoaded={renderMarker}
        options={googleMapDarkThemeConfig}
        yesIWantToUseGoogleMapApiInternals
        zoom={zoom}
      />
    </div>
  );
};

export default GoogleMapContainer;
