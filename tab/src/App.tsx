import React, { useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Connect from './components/Connect';


function App(props: any) {

  return (
    <HashRouter>
      <Routes>
        <Route path="/connect" element={<Connect {...props} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
