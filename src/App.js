
import './App.css';
import React, { useEffect } from 'react'
import Header from './components/Header/Header';
import Slots from './components/Slots/Slots';
import { useDispatch, useSelector } from 'react-redux'
import { getSlots } from './redux/actions/slots'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSlots())
  }, [])

  return (
    <div className="App">
      <Header />
      <Slots />
    </div>
  );
}

export default App;
