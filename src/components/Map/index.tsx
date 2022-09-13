import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as S from "./styles";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCOveUYZnTueFcJGFMKatmOBX-BoyArrdI",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: 25.28478776532558, lng: 51.530055363644784 }),
    []
  );
  return (
    <S.Container>
      <GoogleMap zoom={12} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </S.Container>
  );
}
