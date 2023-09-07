"use client";

import GoogleMapReact from "google-map-react";
import { useState, type PropsWithChildren, useEffect } from "react";

import { type CompaniesCoordinate, companiesCoordinate } from "@common/constants";
import { sleep } from "@common/utils/timer";

const GoogleMapContainer = ({ children }: PropsWithChildren<any>) => {
  const [coordinate, setCoordinate] = useState<CompaniesCoordinate>(
    companiesCoordinate["nomad-coders"]
  );
  const [zoom, setZoom] = useState(20);

  function* zoomGenerateSequence(type: "increase" | "decrease") {
    const limit = 8;

    const promises: any[] = [];
    for (
      let i = type === "increase" ? 0 : limit;
      type === "increase" ? i <= limit : i >= 0;
      type === "increase" ? (i += 0.1) : (i -= 0.1)
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
    for await (let _ of sequence) continue;
  };

  const zoomIn = async () => {
    const sequence = zoomGenerateSequence("decrease");
    for await (let _ of sequence) continue;
  };

  const onFlight = async () => {
    await sleep(5000);
    await zoomOut();
    setCoordinate(companiesCoordinate.itamgames);
    await zoomIn();
  };

  useEffect(() => {
    onFlight().catch(() => {});
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: 0,
        width: "100%",
        height: "100vh",
        perspective: "100px",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        center={coordinate}
        defaultCenter={companiesCoordinate["nomad-coders"]}
        defaultZoom={20}
        yesIWantToUseGoogleMapApiInternals
        zoom={zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMapContainer;
