import 'leaflet-defaulticon-compatibility'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import { polyline } from 'leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];

    const polyline = [
        [49.28594, -123.11129],
        [49.285420181453254, -123.12013318992534],
        [49.28328371195583, -123.11605896626095],
        [49.27957214113902, -123.10980284163549],
        [49.27317120426243, -123.1003403887805],
        [49.26262148768506, -123.06922288628876],
        [49.2482706223134, -123.05591385822083],
        [49.24428437054143, -123.0460891611928],
        [49.238322381821156, -123.03175614847146],
        [49.2297928264591, -123.01265345335341],
        [49.22583273415332, -123.00383313766027],
        [49.22007777404347, -122.98846749439929],
        [49.2123124228911, -122.95917301090668],
        [49.1999251580938, -122.94924204250783],
        [49.20481547534273, -122.90609569181758],
        [49.20445219029092, -122.87403266121198],
        [49.19898593187792, -122.85069077928401],
        [49.18957040368447, -122.84792796775135],
        [49.18281981829667, -122.84482948806762],
    ]

    const purpleOption = {color: 'purple' };
    const blueOption = {color: 'blue' };

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                Skytrain <br /> Waterfront.
                </Popup>
            </Marker>

            <CircleMarker center={[49.285420181453254, -123.12013318992534]} pathOptions={blueOption} radius={10}>
                <Popup>Burrard</Popup>
            </CircleMarker>

            <CircleMarker center={[49.28328371195583, -123.11605896626095]} pathOptions={blueOption} radius={10}>
                <Popup>Granville</Popup>
            </CircleMarker>

            <CircleMarker center={[49.27957214113902, -123.10980284163549]} pathOptions={blueOption} radius={10}>
                <Popup>Stadium - Chinatown</Popup>
            </CircleMarker>

            <CircleMarker center={[49.27317120426243, -123.1003403887805]} pathOptions={blueOption} radius={10}>
                <Popup>Main Street - Science World</Popup>
            </CircleMarker>

            <CircleMarker center={[49.26262148768506, -123.06922288628876]} pathOptions={blueOption} radius={10}>
                <Popup>Commercial - Broadway</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2482706223134, -123.05591385822083]} pathOptions={blueOption} radius={10}>
                <Popup>Nanaimo</Popup>
            </CircleMarker>

            <CircleMarker center={[49.24428437054143, -123.0460891611928]} pathOptions={blueOption} radius={10}>
                <Popup>29th Avenue</Popup>
            </CircleMarker>

            <CircleMarker center={[49.238322381821156, -123.03175614847146]} pathOptions={blueOption} radius={10}>
                <Popup>Joyce - Collingwood</Popup>
            </CircleMarker>
            
            <CircleMarker center={[49.2297928264591, -123.01265345335341]} pathOptions={blueOption} radius={10}>
                <Popup>Patterson</Popup>
            </CircleMarker>

            <CircleMarker center={[49.22583273415332, -123.00383313766027]} pathOptions={blueOption} radius={10}>
                <Popup>Metrotown</Popup>
            </CircleMarker>

            <CircleMarker center={[49.22007777404347, -122.98846749439929]} pathOptions={blueOption} radius={10}>
                <Popup>Royal Oak</Popup>
            </CircleMarker>

            <CircleMarker center={[49.2123124228911, -122.95917301090668]} pathOptions={blueOption} radius={10}>
                <Popup>Edmonds</Popup>
            </CircleMarker>

            <CircleMarker center={[49.1999251580938, -122.94924204250783]} pathOptions={blueOption} radius={10}>
                <Popup>22nd Street</Popup>
            </CircleMarker>

            <CircleMarker center={[49.27957214113902, -123.10980284163549]} pathOptions={blueOption} radius={10}>
                <Popup>New Westminster</Popup>
            </CircleMarker>

            <CircleMarker center={[49.20485707431421, -122.90605028504112]} pathOptions={blueOption} radius={10}>
                <Popup>Columbia</Popup>
            </CircleMarker>

            <CircleMarker center={[49.20445219029092, -122.87403266121198]} pathOptions={blueOption} radius={10}>
                <Popup>Scott Road</Popup>
            </CircleMarker>

            <CircleMarker center={[49.19898593187792, -122.85069077928401]} pathOptions={blueOption} radius={10}>
                <Popup>Gateway</Popup>
            </CircleMarker>
            
            <CircleMarker center={[49.18957040368447, -122.84792796775135]} pathOptions={blueOption} radius={10}>
                <Popup>Surrey Central</Popup>
            </CircleMarker>

            <Marker position={[49.18281981829667, -122.84482948806762]}>
                <Popup>
                Skytrain <br /> King George.
                </Popup>
            </Marker>

            <Polyline pathOptions={purpleOption} positions={polyline}/>
        </MapContainer>
    )
}