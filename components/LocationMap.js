import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function LocationMap({ location }) {
  return (
    <MapContainer center={[0.32303265139362153, 32.5763896287349]} zoom={13} scrollWheelZoom={false} className="rounded-3" style={{ height: '280px'}}>
      <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[0.32303265139362153, 32.5763896287349]}>
    <Popup>
    SOLIZ HOUSE  <br /> Kampala
    </Popup>
  </Marker>
</MapContainer>
  );
}

{/* <Image
      src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(32.5742,0.3228)/32.5742,0.3228,17,17/500x500?access_token=pk.eyJ1Ijoia2FsbHlhcyIsImEiOiJja3JpMGN3NXM2NG43MnBueHA3aWtiZ3czIn0.yY_XUC49_XFjNTVpP_JdYw"
      width={500}
      height={500}
      className="rounded-3"
      alt="Event map location"
    /> */}