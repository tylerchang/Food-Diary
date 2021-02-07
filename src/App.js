import React, { useState } from 'react';
import Title from './comps/Title/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal/Modal';
import UploadWindow from './comps/UploadWindow/UploadWindow';
import Auth from './comps/Auth/Auth';


const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showUploadWindow, setShowUploadWindow] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const newEntryHandler = () => {
  if(!isLoggedIn){
    setShowAuth(!showAuth);
  }else{
    setShowUploadWindow(true);
  }
}

  return (
    <div className="App">
      <Title/>
      {!showUploadWindow && <button onClick={newEntryHandler} className="newEntryButton">New Entry</button>}

      {(showAuth && !isLoggedIn) ? <Auth setShowAuth={setShowAuth} setIsLoggedIn={setIsLoggedIn} setShowUploadWindow={setShowUploadWindow}/> : null}
      
      {(showUploadWindow && isLoggedIn) ? <UploadWindow setShowUploadWindow={setShowUploadWindow}/> : null}

      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImage={selectedImg} setSelectedImage={setSelectedImg}/>}
    </div>
  );
}

export default App;
