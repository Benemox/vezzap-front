import { createContext } from "react";

const  infobeerContext = createContext(null);

export const InfobeerProvider = infobeerContext.Provider;
export const InfobeerConsumer = infobeerContext.Consumer;





export default infobeerContext;