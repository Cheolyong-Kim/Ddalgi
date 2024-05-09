// https://apis.map.kakao.com/web/sample/basicMap/
// https://apis.map.kakao.com/web/sample/addr2coord/

import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKaKaoMapProps {
  address: string;
}

const KaKaoMap = (props: IKaKaoMapProps): JSX.Element => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=13b13e34ca1aba20395fa1cdb172c7cc&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(35.186544, 129.0802475),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(props.address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            );

            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            const infoWindow = new window.kakao.maps.InfoWindow({
              content: props.address,
            });
            infoWindow.open(map, marker);

            map.setCenter(coords);
          }
        });
      });
    };
  }, [props.address]);

  return <div id="map" style={{ width: "600px", height: "400px" }}></div>;
};

export default KaKaoMap;
