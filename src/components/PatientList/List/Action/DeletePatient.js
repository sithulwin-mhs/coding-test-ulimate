import React from "react";
import { toast } from 'react-toastify';

/** 
 * Images 
 */
 import CrossIcon from '../../../../‌assets/cross.svg'


const DeletePatient = ({ patientId, setShowDeleteModal ,patientList,setPatientList}) => {

  const handleDeletePatientData = ()=>{
    let patientData = [...patientList];
    let deletedPatientArr = [];
    deletedPatientArr = patientData.filter((item)=>{
      return item.id !== patientId
    })

    setPatientList(deletedPatientArr);
    toast.success("Patient is successfully deleted !");
    setShowDeleteModal(false);

  }

  return (

    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="p-5 border-solid border-slate-200 rounded-t">
              <div className="flex justify-between">
                <h3 className="font-modal-title-confirm font-semibold">
                  Confirmation
                </h3>
                <img src={CrossIcon} className="w-3 h-auto cursor-pointer" alt="DeleteIcon" onClick={() => setShowDeleteModal(false)} />
              </div>
            </div>
            {/*body*/}
            <div className="font-default">
              <p className="font-default pl-5 py-2">
                Are you sure you want to delete this patient ?
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center py-6 px-10">
              <button
                className="delete-button"
                type="button"
                onClick={() => handleDeletePatientData()}
              >
                Delete
              </button>
              <button
                className="cancel-button"
                type="button"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>

  );
}

export default DeletePatient;