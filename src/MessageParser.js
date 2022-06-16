// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase()

      if(lowercase.includes("rust")){
        this.actionProvider.handleRustList()
      }

      // if (lowercase.includes("hello world")){
      //     this.actionProvider.helloWorldHandler()
      // }

      // if (lowercase.includes("todos") || (lowercase.includes("messi"))) {
      //   this.actionProvider.todosHandler()
      // }
    }
  }
  
  export default MessageParser;