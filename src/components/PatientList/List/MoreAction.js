import React, { useState } from 'react'
/**
 * Components
 */
import DeletePatient from './Action/DeletePatient';
import AddPatient from './Action/AddPatient'
import EditIcon from '../../../‌assets/edit.png';
import DeleteIcon from '../../../‌assets/delete.png';

/** 
 * Images 
 */
import MoreActionIcon from '../../../‌assets/more.png';
import CrossIcon from '../../../‌assets/cross.svg';

const MoreAction = ({ patientId, patientList, setPatientList }) => {

    const [showStatus, SetShowStatus] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [isShowDeleteModal, setShowDeleteModal] = useState(false);

    const showDropdown = () => {
        SetShowStatus(!showStatus)
    }

    return (
        <div>
            <div className='relative mr-5'>
                <button className="" type="button" onClick={showDropdown}>
                    <div>
                        <img src={MoreActionIcon} className="w-3 h-3" alt="Back Dropdown" />
                    </div>
                </button>
                {showStatus === true &&
                    <div className="dropdown-show absolute -top-24 -right-5 w-44">
                        <div>
                            <div className='more-button relative' onClick={() => setShowModal(true)}>
                                <img src={EditIcon} className="w-5 h-auto cursor-pointer" alt="More" />
                                <span>Edit</span>
                            </div>
                                <img src={CrossIcon} className="w-2 h-2 absolute top-2 right-2 cursor-pointer" alt="Cross" onClick={showDropdown} />
                        </div>    
                        <div className='more-button' onClick={() => setShowDeleteModal(true)}>
                            <img src={DeleteIcon} className="w-5 h-auto cursor-pointer" alt="DeleteIcon" />
                            <span>Delete</span>
                        </div>
                        {
                            isShowDeleteModal ?
                                <DeletePatient
                                    patientList={patientList}
                                    setPatientList={setPatientList}
                                    patientId={patientId}
                                    setShowDeleteModal={setShowDeleteModal} />
                                :
                                ""
                        }

                        {
                            showModal ?
                                <AddPatient
                                    patientList={patientList}
                                    setPatientList={setPatientList}
                                    patientId={patientId}
                                    setShowModal={setShowModal}
                                />
                                :
                                ""
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default MoreAction