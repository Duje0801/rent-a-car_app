import { useEffect, useState, useContext } from "react";
import { GoX } from "react-icons/go";
import { BsChatLeft } from "react-icons/bs";
import { AppContext } from "../context/Context";
import Translations from "../data/translations";
import logo from "../img/logo.png";
import "../style/components/chat.css";

function Chat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [state, setState] = useState(``);

  const { messageList, setMessageList, language } = useContext(AppContext);

  const translations = Translations();

  useEffect(() => {
    setMessageList([translations.chat1]);
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageList.length === 3) return;
    // When user send message, automaticaly gets an answer from company
    setMessageList([...messageList, state, translations.chat2]);
    setState(``);
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    if (chatOpen) return setChatOpen(false);
    return setChatOpen(true);
  };

  const mapMessages = messageList.map((message, i) => {
    if (i === 1)
      return (
        <div className="messageUserC" key={i}>
          {message}
        </div>
      );
    return (
      <div className="messageBoxC" key={i}>
        <img src={logo} alt="logo"></img>
        <div className="messageC">{message}</div>
      </div>
    );
  });

  if (chatOpen)
    return (
      <div className="chatC">
        <GoX onClick={handleClick} className="closeC" />
        <form onSubmit={handleSubmit}>
          <div className="titleC">Oldtimer Rent-a-car</div>
          <div className="messagesDisplayC">
            <div>{mapMessages}</div>
          </div>
          <input
            value={state}
            onChange={handleChange}
            className="chatInputC"
            maxLength={100}
            placeholder={translations.typeMessage}
          />
          <button className="chatBtnC" type="submit"></button>
        </form>
      </div>
    );
  else
    return (
      <div onClick={handleClick} className="chatClosedC">
        <BsChatLeft />
      </div>
    );
}

export default Chat;
