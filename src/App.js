import React from 'react'
import { Header,Footer,Sidebar, Pages ,Preloader_overlay ,Topbar } from './compontes';
import './App.css'

 
function App() {
  return (
     <div>
      <Preloader_overlay/> 
      <Sidebar/>
      <main className="main oh" id="main">
      <Topbar/>
      <Header/> 
      <Pages/>
      <Footer/>
      </main>
     </div>
  );
}

export default App;
