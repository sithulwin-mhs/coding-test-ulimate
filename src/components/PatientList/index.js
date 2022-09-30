import React, { useState } from "react";
/**
 * Components
 */
import List from './List'
import { Hook } from './hook'
import StatusAllDropDown from './DropdownSearch/StatusAllDropdown'
import BreedAllDropdown from './DropdownSearch/BreedAllDropdown'
import Paginate from './Paginate'
import AddPatient from './List/Action/AddPatient'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Images
 */
import AddIcon from '../../../src/‌assets/add.png';


const PatientList = (props) => {
  const [patientList, setPatientList] = Hook(props)
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='min-h-screen bg-search py-5'>
      <div className='bg-white mx-5 min-h-screen px-4'>
        <div className='pt-5'>
          <h1 className='font-heading pb-3'>Patient List</h1>
          {/*-- search in table and add patient --*/}
          <div className='md:flex md:justify-between'>
            <div>
              <input
                type="text"
                placeholder='Search table'
                className='rounded-full form-search' />
            </div>
            <div className='col-span-8'></div>
            <div className='my-3 md:my-0'>
            <button class="rounded-full bg-navigation px-8 py-1.5 text-white flex space-x-3"
                onClick={() => setShowModal(true)}
              >
                <img src={AddIcon} className="w-3 h-auto my-auto" alt="Add" />
                <p>Add new patient</p>
              </button>
              {
                showModal ?
                  <AddPatient
                    patientList={patientList}
                    setPatientList={setPatientList}
                    patientId={""}
                    setShowModal={setShowModal}
                  />
                  :
                  null
              }
              <ToastContainer
                position="bottom-left"
                hideProgressBar={true}
                autoClose={1000}
                toastStyle={{ backgroundColor: "#1AB45D",color:'#ffffff',fontSize:"14px",borderCollapse: "collapse" }}
              />
              {/* ToastContainer is library so only can edit inline style */}

            </div>
          </div>
          {/*-- filter dropdown --*/}
          <div className='md:flex md:justify-between'>
            <div className='my-5 flex gap-x-3'>
              <StatusAllDropDown />
              <BreedAllDropdown />
            </div>
            <div className='col-span-8'></div>
            <div className='my-5'>
              <Paginate />
            </div>
          </div>
        </div>
        <List patientList={patientList} setPatientList={setPatientList} />
      </div>
    </div>
  )
}

export default PatientList