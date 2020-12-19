import React, { useState } from 'react';
import BarCodeScanner from 'barcode-react-scanner';
 
const TestingComponent = () => {
 
 const [code, setCode] = useState('')
 
 return (
     <>
     { code && <p> code </p> }
     <BarCodeScanner onUpdate={ (err, resp) => {
         if(resp) {
             setCode(resp.getText())
         }
      }}
    />
    </>
 );
 
}
 
export default TestingComponent;