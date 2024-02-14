// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// App.js
import React from 'react';
import Navigation from './components/Navigation';
import MissionStatement from './components/MissionStatement';
import ProjectList from './components/ProjectCarosel'; 
import RSSNews from './components/RSSNews'; 
import Player from './components/MusicPlayer'; 
import Footer from './components/Footer';
import DevTeam from './components/DevTeam';
import Banner from './components/Banner';

const App = () => {
  

  return (
    <div>
      <Banner />
      <Navigation />
      <DevTeam />
      <MissionStatement />
      <ProjectList />
      <RSSNews />
      <Player />
      <Footer />
    </div>
  );
};

export default App;
