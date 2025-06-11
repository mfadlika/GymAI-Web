import "./App.css";
import Chat from "./Components/Chat.js";

function App() {
  return (
    <div className="app-bg">
      <header className="app-header enhanced-header">
        <div className="header-glow" />
        <h1>GymAI Chat</h1>
        <p className="app-subtitle">
          Asisten Gym & Fitness Berbasis AI
          <br />
          <span className="subtitle-highlight">
            Tanya apa saja tentang nutrisi, fitness, dan jadwal latihan!
          </span>
        </p>
      </header>
      <Chat />
    </div>
  );
}

export default App;
