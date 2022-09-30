import React from 'react'
import { Hook } from './hook'

/**
 * Images
 */
import GreenDropdown from '../../../‌assets/green_down.png'

const ShowPaginateDropdown = (props) => {

    const [
            paginateRowList,
            showRow,
            /**
             * action
             */
            showDropdown
        ] = Hook(props);

  return (
    <div className='relative'> 
        <div className='flex gap-x-4'>
            <p className='font-default my-auto'>Rows per pages:</p>
            <button className="dropdwon-button" type="button" onClick={showDropdown}>
            <div className='flex text-title-color'>
                10
            </div>
            <div>
                <img src={GreenDropdown} className="ml-2 w-3 h-3" alt="Back Dropdown"/>
            </div>
        </button>
        </div>      

        {showRow === true &&
        <div className="dropdown-show w-20 absolute top-10 right-0">
            <ul class="py-1 font-default">
                {paginateRowList.map(row=>
                <li className='dropdown-item text-title-color text-center' key={row.id}>
                    {row.value}
                </li>
                )}
            </ul>
        </div>
        }
    </div>
  )
}

export default ShowPaginateDropdown