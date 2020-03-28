import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Paul Dupont" text="Online" avatar="https://randomuser.me/api/portraits/men/85.jpg"/>
      <Contact name="Sarah Parker" text="Offline" avatar="https://randomuser.me/api/portraits/women/85.jpg"/>
      <Contact name="Mila Vich" text="Online" avatar="https://randomuser.me/api/portraits/women/86.jpg"/>
    </div>
  );
}

export default App;
