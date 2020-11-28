import React from 'react';
import Navbar from './components/Navbar';
import Menu from './contents/Menu';

function App() {
  return (
    <div className="bg-warmGray-100 dark:bg-gray-800 dark:text-white h-full">
      <Navbar/>
      <Menu/>
    </div>
  );
}

export default App;
