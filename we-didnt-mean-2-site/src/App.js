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
import Projects from './components/ProjectCarosel'; // Replace with your actual Projects component
import RSSNews from './components/RSSNews'; // Replace with your actual RSSNews component
import Player from './components/MusicPlayer'; // Replace with your actual MusicPlayer component
import Footer from './components/Footer';
import DevTeam from './components/DevTeam';

const App = () => {
  const sections = [
    { id: 'aboutUs', label: 'About Us', component: <DevTeam /> },
    { id: 'projects', label: 'Projects', component: <ProjectCarosel /> },
    { id: 'rssNews', label: 'RSS News', component: <RSSNews /> },
    { id: 'musicPlayer', label: 'Music Player', component: <Player /> },
  ];

  return (
    <div>
      <Navigation sections={sections} />
      <DevTeam />
      <MissionStatement />
      <Projects />
      <RSSNews />
      <Player />
      <Footer />
    </div>
  );
};

export default App;
