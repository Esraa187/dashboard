import './App.css';
import Table from './components/Table';
import { Route, Routes } from 'react-router-dom'
import LeftSideMenu from './components/LeftSideMenu';
import Header from './components/Header';
import React, { useContext } from 'react'
import { SideBarContext } from './context/SideBarContext';
import PersonalData from './components/PersonalData';
import CarTable from './components/CarTable';
import DetailsTable from './components/DetailsTable';
import TripTable from './components/TripTable';
import LiciencesTable from './components/LiciencesTable';
import RequestTable from './components/RequestTable';
import UserEdit from './components/UserEdit';
import Image from './components/Image';
import CarEdit from './components/CarEdit';
import PersonalEdit from './components/PersonalEdit';
import FormDialog from './components/FormDialog';


function App() {
  const { show } = useContext(SideBarContext);
  return (
    <div className="App">
      <Header />
      <LeftSideMenu />
      <div className={show ? "container aa" : "container"}>
        <Routes>
          <Route element={<Table />} path='/table'></Route>
          <Route element={<PersonalData />} path='/personal-data'></Route>
          <Route element={<CarTable />} path='/car'></Route>
          <Route element={<DetailsTable />} path='/details'></Route>
          <Route element={<TripTable />} path='/trip'></Route>
          <Route element={<LiciencesTable />} path='/licienses'></Route>
          <Route element={<RequestTable />} path='/request'></Route>
          <Route element={<UserEdit />} path='/useredit'></Route>
          <Route element={<CarEdit />} path='/caredit'></Route>
          <Route element={<PersonalEdit />} path='/personaledit'></Route>
          <Route element={<Image />} path='/image'></Route>
        </Routes>
      </div>
      


    </div>
  );
}

export default App;

