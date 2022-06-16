// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
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
                    text: "Museum 't Fiskershúske",
                    url: "https://www.visitwadden.nl/nl/bezoeken/accommodaties/175210561/museum-t-fiskershuske",
                    id: 1,
                    },
                    {
                    text: "Yoga op Vlieland",
                    url: "https://vlieland.net/nl/search?search=yoga",
                    id: 2,
                    },
                    {
                    text: "De Koffiesilo",
                    url: "https://www.visitwadden.nl/nl/bezoeken/accommodaties/1877693028/de-koffiesilo",
                    id: 3,
                    }
                    

                ]
            }
        },
        // {
        //     widgetName: "todos",
        //     widgetFunc: (props) => <Todos {...props} />,
        //     mapStateToProps: ["todos"],   
        // },
    ],
  }

export default config
 