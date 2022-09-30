import React, { useEffect, useState } from "react";
import Moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/** 
 * Images 
 */
import CrossIcon from '../../../../‌assets/cross.svg'

const AddPatient = ({ patientList, setPatientList, patientId, setShowModal }) => {

  const [petName, setPetName] = useState("");
  const [status, setStatus] = useState("");
  const [parentName, setParentName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("Male");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [township, setTownship] = useState("");

  useEffect(() => {

    let patientL = [...patientList];
    let oldPatientData = "";
    let addressData = "";
    let dateOfB = new Date();
    dateOfB = Moment(oldPatientData.dateOfBirth).format('YYYY-MM-DD')

    if (patientId !== "") {
      oldPatientData = patientL.filter((item)=>{
        return item.id === patientId
      })[0]
      
      addressData = oldPatientData.address;
  
      setPetName(oldPatientData.petName);
      setStatus(oldPatientData.status);
      setParentName(oldPatientData.pawrent);
      setBreed(oldPatientData.breed);
      setGender(oldPatientData.gender);
      setDateOfBirth(dateOfB);
      setContactNo(oldPatientData.contact);
      setAddress(addressData.split(",")[0]);
      setCity(addressData.split(",")[1]);
      setTownship(addressData.split(",")[2]);
    }

  }, [])

  const checkIsValidData = ()=>{
    if(status !== "" && petName !== "" && parentName !== "" && breed !== "" && gender !== "" && dateOfBirth !=="" && contactNo !== "" && city !== "" && township !== ""){
      return true;
    }else return false;
  }

  const handleAddNewPatient = () => {

    let patientData = [...patientList];
    let paIdValid = 1;
    let paId = patientList.length === 0 ? paIdValid : patientList[patientList.length - 1].id + 1;
    let bdDate = new Date();
    bdDate = Moment(dateOfBirth).format('DD-MM-YYYY');
    let isValidData = checkIsValidData();
    if(isValidData){
      patientData.push({
        id: paId,
        code: "B-0025",
        status: status,
        petName: petName,
        pawrent: parentName,
        breed: breed,
        gender: gender,
        dateOfBirth: bdDate,
        contact: contactNo,
        address: address+","+city+","+township
      });
      setPatientList(patientData);
      toast.success("Patient is successfully created !")
    }else {
      toast.warn("Please fill all data !")
    }
    setShowModal(false);
  }
  const handleUpdatePatient = ()=>{

    let patientData = [...patientList];
    let addressData = address+","+city+","+township;

    let isValidData = checkIsValidData();
    if(isValidData){
      patientData.map(obj => {
          if (obj.id === patientId) {
              obj.status = status
              obj.petName = petName
              obj.pawrent = parentName
              obj.breed = breed
              obj.gender = gender
              obj.dateOfBirth = dateOfBirth
              obj.contact = contactNo
              obj.address = addressData      
      }});

    setPatientList(patientData);
    toast.success("Patient is successfully updated !")
  }else {
    toast.warn("Please fill data !",{backgroundColor: '#8329C5',})
  }
  setShowModal(false);
    

  }

  const handleChangeRecord = (e) => {
    if (e.target.name === "pet") {
      setPetName(e.target.value);
    }
    if (e.target.name === "parent") {
      setParentName(e.target.value);
    }
    if (e.target.name === "contactNo") {
      setContactNo(e.target.value);
    }
    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
  }
  
  const handleChangeOption = (e) => {
    if (e.target.name === "status") {
      setStatus(e.target.value);
    }
    if (e.target.name === "breed") {
      setBreed(e.target.value);
    }
    if (e.target.name === "city") {
      setCity(e.target.value);
    }
    if (e.target.name === "township") {
      setTownship(e.target.value);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="p-5 border-solid border-slate-200 rounded-t">
              <img src={CrossIcon} class="absolute top-4 right-4 h-auto w-3 cursor-pointer" alt="Cross" onClick={() => setShowModal(false)}/>
              <h3 className="font-modal-title text-center mt-5">
                {patientId === "" ? "Add new": "Update"} patient
              </h3>
              <p className="font-default text-center pt-1">
                Enter {patientId === "" ? "new" : "update"} patient information below
              </p>
            </div>
            {/*body*/}
            <div className="px-16 mt-6 font-default">
              <form>
                <div className="flex gap-4">
                  <div>
                    <legend>Pet Name</legend>
                    <input type="text" className="form-input outline-inherit" name="pet" value={petName} onChange={(event) => handleChangeRecord(event)} />
                  </div>
                  <div>
                    <legend>Status</legend>
                    <select className="form-input" value={status} name="status" onChange={handleChangeOption}>
                      <option>Please choose status</option>
                      <option>Allergy</option>
                      <option>Picky</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between my-5">
                  <div>
                    <legend>Pawrent</legend>
                    <input type="text" className="form-input" value={parentName} name="parent" onChange={(event) => handleChangeRecord(event)} />
                  </div>
                  <div>
                    <legend>Breed</legend>
                    <select className="form-input" name="breed" value={breed} onChange={handleChangeOption}>
                      <option>Please choose status</option>
                      <option>Beagle</option>
                      <option>Spaniel</option>
                      <option>Golden Retriever</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between gap-10 my-5">
                  <div>
                    <legend>Gender</legend>
                    <div className="flex justify-between gap-6 pt-2">
                      <div>
                        <input type="radio" className="form-radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> <span className="pl-2 font-medium">Male</span>
                      </div>
                      <div>
                        <input type="radio" className="form-radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> <span className="pl-2 font-medium">Female</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <legend>Date of Birth</legend>
                    <input type="date" placeholder="dd-mm-yyyy" className="form-input" data-date="" min="01-01-1997" max="31-12-2023" data-date-format="DD MM YYYY" value={dateOfBirth} onChange={(event)=>setDateOfBirth(event.target.value)} />
                  </div>
                </div>
                <div className="flex justify-between my-5">
                  <div>
                    <legend>Contact Phone No.</legend>
                    <input type="text" className="form-input" name="contactNo" value={contactNo} onChange={(event) => handleChangeRecord(event)} />
                  </div>
                  <div>
                    <legend>Address</legend>
                    <textarea className="form-input" name="address" rows="1" cols="20" value={address} onChange={(event) => handleChangeRecord(event)} />
                  </div>
                </div>
                <div className="flex justify-between my-5">
                  <div>
                    <legend>City</legend>
                    <select className="form-input" name="city" value={city} onChange={handleChangeOption}>
                      <option>Please choose city</option>
                      <option>Hlaing</option>
                      <option>Kamayut</option>
                      <option>Mayagone</option>
                      <option>Sanchaung</option>
                    </select>
                  </div>
                  <div>
                    <legend>Township</legend>
                    <select className="form-input" name="township" value={township} onChange={handleChangeOption}>
                      <option>Please choose township</option>
                      <option>Yangon</option>
                      <option>Mandalay</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6">
              <button
                className={patientId === "" ? "add-button":"update-button"}
                type="button"
                onClick={patientId === "" ? handleAddNewPatient : handleUpdatePatient}
              >
                {patientId === "" ? "Save": "Update"}
              </button>
              <button
                className="cancel-button"
                type="button"
                onClick={() => setShowModal(false)}
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

export default AddPatient;