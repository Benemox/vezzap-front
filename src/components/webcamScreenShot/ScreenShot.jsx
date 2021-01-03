import React from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import "../../pages/Scan/Scan.css"


const WebcamCapture = () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
    <>
      {devices.map((device, key) => (
          <div>
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
            {device.label || `Device ${key + 1}`}
          </div>

        ))}
    </>
  );
};


function WebcamScreenShot() {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        aspectRatio: 0.6666666667
      }
      ;
      
      
       
    const but = ">"
    return (
      <div>
          <div>
             <p className="Frame-2">ScreenShot</p>
          </div>
         <Webcam 
          videoConstraints={videoConstraints} 
          width={48} 
          height={72}
         />
         <button onClick={WebcamScreenShot}>Capturar</button>
      </div>
    );
  }
  
  export default  WebcamScreenShot





