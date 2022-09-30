import React from 'react'
/**
 * Components
 */
import MoreAction from './MoreAction';

/**
 * Images
 */
 import Allergy from '../../../‌assets/allergy.png';
 import Picky from '../../../‌assets/picky eater.png'
 import Nodata from '../../../‌assets/dataList.png'


const List = ({patientList ,setPatientList}) => {
  const listTitle = [
    {id:1, title:"ID"},
    {id:2, title:"Pet Name"},
    {id:3, title:"Stautus"},
    {id:4, title:"Pawrent"},
    {id:5, title:"Breed"},
    {id:6, title:"Gender"},
    {id:7, title:"Date of Birth"},
    {id:8, title:"Contact Ph No."},
    {id:9, title:"Address"}
  ]

  const noData = 
      <>    
        <div className='flex justify-center mt-10'>
            <img src={Nodata} className="w-20 h-20" alt='No Data' />
        </div>
        <div className='flex justify-center'>
            <p className='font-default'>No Data !</p>
        </div>
      </>

  return (
    <div> 
        <table class="table-auto md:min-w-full border-collapse">
          <thead>
            <tr className='font-default-heading border-y-2'>
            <th><input type="checkbox"/></th>
            <th></th>
            {listTitle.map(list=>
                <th className="text-left py-4" key={list.id}>{list.title}</th>
            )}
            <th></th>
            </tr>
          </thead>
          <tbody>
            {patientList.map(list=>
            <tr className='border-b-2 font-default'>
              <td><input type="checkbox"/></td>
              <td className='w-5'></td>
              <td className='py-4'>{list.code}</td>
              <td>{list.petName}</td>
              <td>
              {list.status === "Allergy" ? 
                    <div>
                      <img src={Allergy} className="w-5 h-5" alt="Allergy"/>
                    </div> :
                    <div>
                      <img src={Picky} className="w-5 h-5" alt="Picky"/>
                    </div>
              }
              </td>
              <td>{list.pawrent}</td>
              <td>{list.breed}</td>
              <td>{list.gender}</td>
              <td>{list.dateOfBirth}</td>
              <td>{list.contact}</td>
              <td>{list.address}</td>
              <td><MoreAction patientId={list.id} setPatientList={setPatientList} patientList={patientList} /></td>
            </tr>
            )}
          </tbody>
        </table>
        { patientList.length === 0 && noData }
    </div>
  )
}

export default List