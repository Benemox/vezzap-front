import React, {useState} from "react";
import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet"
import {Icon} from "leaflet"
import "./Map.css"

export default function ResMap() {
 const [activeRestaurant, setRestaurant] = useState(null)
    let datos = [
        {
            "name": "Cafe Gijon",
            "latitude": 40.421954,
            "longitud": -3.693168,
            "descrip": "0000-00-00 00:00:00",
            "updatedAt": "0000-00-00 00:00:00",
            "horario": "7am - 10pm"
        },
        {
            "name": "Canibal raw Restaurant",
            "latitude": 40.422199,
            "longitud": -3.694183,
            "descrip": "0000-00-00 00:00:00",
            "updatedAt": "0000-00-00 00:00:00",
            "horario": "7am - 10pm"
        },
        {
            "name": "RocaFria Restaurant",
            "latitude": 40.421738,
            "longitud": -3.695063,
            "horario": "7am - 10pm"
        },
        {
            "name": "Marius",
            "latitude": 40.422477,
            "longitud": -3.695353,
            "horario": "7am - 10pm"
        },
        {
            "name": "Dingo Restaurant",
            "latitude": 40.422314,
            "longitud": -3.691160,
            "horario": "7am - 10pm"
        },
        {
            "name": "Tampu",
            "latitude": 40.421901,
            "longitud": -3.693549,
            "horario": "7am - 10pm"
        }
        ]
       
    return (<MapContainer center={["40.421415","-3.692700"]} zoom={16}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        {datos.map(el => {
        return <Marker
          key={el.name}
          position={[
            el.latitude,
            el.longitud
          ]}
          onClick={() => {
              console.log(el)
            setRestaurant(el);
          }}
          
        />}
      )}
     
      {activeRestaurant && (
        <Popup
            position={[`${activeRestaurant.latitude}`,`${activeRestaurant.longitud}`]}
            onClose={() => {
                setRestaurant(null);
            }}
        >
            <div>
                <h2>{activeRestaurant.name}</h2>
                <p>{activeRestaurant.horario}</p>
            </div>
        </Popup>
      )}
    </MapContainer>);
}
