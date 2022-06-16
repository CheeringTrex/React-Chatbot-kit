import './App.css';

import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'; 
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';

import Home from './pages/home';
// import RouterPage from './pages/RouterPage';




function App() {
  return (
    <div className="App">
       <Home />
      <header className="App-header">
        <Chatbot 
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          headerText= "Uw gesprek met Nora van de Wadden"
          placeholderText='Schrijf hier uw bericht'
        />
      </header>
    </div>
  );
}

export default App;
 