import { useState, createContext } from "react";

export const AppContext = createContext();

export function AppContextProvider(Component) {
  return function Context(props) {
    const [language, setLanguage] = useState(`en`);
    const [reservation, setReservation] = useState(null);
    const [carFleetShow, setFleetShow] = useState(1);
    const [messageList, setMessageList] = useState([]);

    const valueToShare = {
      language,
      setLanguage,
      reservation,
      setReservation,
      carFleetShow,
      setFleetShow,
      messageList,
      setMessageList,
    };

    return (
      <AppContext.Provider value={valueToShare}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };
}
