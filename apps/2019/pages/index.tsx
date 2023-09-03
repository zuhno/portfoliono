import dynamic from "next/dynamic";
import React, { useState } from "react";

import Loading from "../components/Loading";

const DynamicMain = dynamic(() => import("./Main"), { ssr: false }) as any;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading setLoading={handleSetLoading} />}
      <DynamicMain />
    </>
  );
}
