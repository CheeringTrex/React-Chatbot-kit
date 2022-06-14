// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from "./components/Todos/Todos";
import CoBotAvatar from "./components/CoBotAvatar/CoBotAvatar";
import VacationOptions from "./components/Options/Options";
import LinkList from "./components/LinkList/LinkList";

const botName = "Nora"

const config = {
    
    initialMessages: [
        createChatBotMessage(`Hoi!, mijn naam is ${botName} en ik ga jou helpen in je zoektocht naar de ideale bestemming op de wadden!`),
        createChatBotMessage(`Waarvoor zou jij graag naar de wadden gaan?`, {
        widget: "vacationOptions",
        delay: 1200,
        withAvatar: true
        }),
    ],
    botName: "Nora van de Wadden",
    customComponents: {
        botAvatar: (props) => <CoBotAvatar {...props} /> 
    },
    customStyles: {
        
        botMessageBox: {
            backgroundColor: "black"

        },
        chatButton: {
            backgroundColor: "#00AF4B"
        },
    },
    state: {
        todos: []
    },
    widgets: [
        {
            widgetName: "vacationOptions",
            widgetFunc: (props) => <VacationOptions {...props} />
        },
        {
            widgetName: "rustLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                    text: "Rust aan de wadden",
                    url: "https://www.youtube.com/watch?v=eBG7P-K-r1Y&ab_channel=foofightersVEVO",
                    id: 1,
                    },
                    {
                    text: "De wadden zijn rustig",
                    url: "https://www.youtube.com/watch?v=h_L4Rixya64&ab_channel=foofightersVEVO",
                    id: 2,
                    },
                    {
                    text: "Voor rust, ga naar de wadden!",
                    url: "https://www.youtube.com/watch?v=0hu1IMp0-yY&ab_channel=foofightersVEVO",
                    id: 3,
                    }
                    

                ]
            }
        },
        {
            widgetName: "todos",
            widgetFunc: (props) => <Todos {...props} />,
            mapStateToProps: ["todos"],   
        },
    ],
  }

export default config
 