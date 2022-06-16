// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
    }

    handleRustList = () => {
        const message = this.createChatBotMessage(
          "Rust, daar heb ik het volgende op gevonden!",
          {
            widget: "rustLinks",
          }
        );
          this.addMessageToState(message)
    }

    // helloWorldHandler = () => {
    //     const message = this.createChatBotMessage("Hallo wereld, wereld de wereld is...")
    //     this.addMessageToState(message)
    // }

    // todosHandler = () => {
    //     const message = this.createChatBotMessage("Hier zijn je todos", {
    //         widget: "todos"
    //     });
    //     this.addMessageToState(message)
    // }

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
             messages:[...prevState.messages, message]
        }));
    }; 
 }


 
 export default ActionProvider;