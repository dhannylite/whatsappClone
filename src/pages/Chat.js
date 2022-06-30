import React, { useCallback, useEffect, useState } from "react";
import "./Chat.css";
import Footer from "../components/ChatLayout/Footer";
import Convo from "../components/ChatLayout/Convo";
import Header from "../components/ChatLayout/Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { messageAction } from "../store/message-slice";
import getRandomSentence from "../utils/getRandomSentence";
import ChatSearchAside from "../components/ChatLayout/Profile";
import ChatProfileAside from "../components/ChatLayout/ChatAside";
import ChatAside from "../components/ChatLayout/ChatAside";
import Search from "../components/layout/Search";
import Profile from '../components/ChatLayout/Profile'
import { archiveActions } from "../store/archive-slice";

let initial = true;
export default function Chat() {
  const [showChatSearchAside, setShowChatSearchAside] = useState(false);
  const [showChatProfileAside, setShowChatProfileAside] = useState(false);
  const users = useSelector((state) => state.message.users);
  const archievedUsers = useSelector(state => state.message.archivedUsers)
  const typing = useSelector((state) => state.message.newMessage);
  const archived = useSelector(state => state.archive.archived)
  const show = useSelector(state => state.archive.showArchive)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const params = useParams();
  let { id } = params;
  // let contact
  console.log(archievedUsers)
  const contact = users.find((user) => user.id === +params.id) || archievedUsers.find((user) => user.id === +params.id)
  // if (!contact) {
  //   contact = archievedUsers.find((user) => user.id === +params.id)
  // } 
  console.log(contact);
  const scrollToLastMessage = useCallback(() => {
    const view = document.getElementById("last");
    // console.log(view)
    view.scrollIntoView();
  }, []);

  // if (archived) {
  //   console.log(+id+2,'helllele')
    
  //   // navigate(`/chat/${+id+1}`)
  //   dispatch(archiveActions.addToArchive(+id))
  //   dispatch(messageAction.addToArchive(+id))
  // }

  function showChatSearchAsideHandler() {
    setShowChatSearchAside(true);
    setShowChatProfileAside(false);
  }
  function showChatProfileAsideHandler() {
    setShowChatSearchAside(false);
    setShowChatProfileAside(true);
  }
  const hideChatAsideHandler = useCallback(() => {
    console.log("hide");
    setShowChatSearchAside(false);
    setShowChatProfileAside(false);
  },[id])

  useEffect(() => {
    console.log("scrolling");
    scrollToLastMessage();
    if (!show) {
      dispatch(messageAction.setAsUnread(+id));
    }
    hideChatAsideHandler()
  }, [scrollToLastMessage, id, hideChatAsideHandler]);

  useEffect(() => {
    const delayTimes = [1000, 2000, 3000];
    const delayTimeIndex = Math.floor(Math.random() * delayTimes.length);
    const delayTime = delayTimes[delayTimeIndex];
    const timer = setTimeout(() => {
      console.log("effect");
      dispatch(
        messageAction.setAsTyping({
          id: +id,
          typing: typing,
        })
      );
      console.log(initial, typing);
      if (!initial && !typing) {
        dispatch(
          messageAction.fetchResponse({
            id: +id,
            response: {
              content: getRandomSentence(),
              sender: +id,
              time: new Date().toLocaleTimeString(),
              status: null,
            },
          })
        );
      }
      dispatch(messageAction.setAsRead(+id));
    }, delayTime);
    // console.log(initial, typing)
    // console.log(2)
    return () => {
      initial = false;
      clearTimeout(timer);
      // clearTimeout(timer1)
    };
  }, [typing]);

  // console.log(archieved,'achieveddddd')
  // if (archieved) {
  //   // console.log(+id+1, 'hi')
  //   // navigate(`/chat/${+id + 1}`)
  //   // dispatch(archiveActions.closeArchive())
    
  // }

  function addMessageHandler(message) {
    // console.log(message)
      dispatch(
        messageAction.addMessage({
          id: +id,
          newMessage: {
            content: message,
            sender: null,
            time: new Date().toLocaleTimeString(),
            status: null,
          },
        })
      );
    
    scrollToLastMessage();
  }

  console.log(typing, 9);
  return (
    <div className="chat">
      <main>
        <div className="bg-chat-image"></div>
        <Header
          profilePicture={contact.profile_picture}
          name={contact.name}
          typing={contact.typing}
          onShowSearch={showChatSearchAsideHandler}
          onShowProfile={showChatProfileAsideHandler}
        />
        <Convo messages={contact.messages}/>
        <Footer onAddMessage={addMessageHandler} onScroll={scrollToLastMessage} />
      </main>
      <ChatAside
        active={showChatSearchAside || showChatProfileAside}
        onHide={hideChatAsideHandler}
        heading={showChatProfileAside ? "Contact Info" : "Search Messages"}
      >
        {showChatSearchAside && <div>
          <Search />
          <p className="search_with">Search for messages with {contact.name}</p>
        </div>}
        {showChatProfileAside && <Profile user={contact} />}
      </ChatAside>
      {/* <ChatAside
        active={showChatProfileAside}
        onHide={hideChatAsideHandler}
        heading="Contact Info"
      ></ChatAside> */}
      {/* <ChatProfileAside active={showChatProfileAside} onHide={hideChatAsideHandler}  /> */}
    </div>
  );
}
