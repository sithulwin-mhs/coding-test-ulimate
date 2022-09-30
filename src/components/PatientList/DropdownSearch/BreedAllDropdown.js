import React from 'react'
import { Hook } from './hook'

/**
 * Images
 */
import BlackDropdown from '../../../‌assets/black_down.png'

const BreedAllDropdown = (props) => {

    const [
            statusDropDownList,
            showStatus,
            breedDropdownList,
            /**
             * action
             */
            showDropdown
        ] = Hook(props);

  return (
    <div className='relative'>       
        <button className="dropdwon-button" type="button" onClick={showDropdown}>
            <div className='flex'>
                Breed All
            </div>
            <div>
                <img src={BlackDropdown} className="ml-2 w-3 h-3" alt="Back Dropdown"/>
            </div>
        </button>
        {showStatus === true &&
        <div className="dropdown-show absolute inset-x-0 top-10">
            <ul class="py-1 font-default">
                {breedDropdownList.map(breed=>
                <li className='dropdown-item' key={breed.id}>
                    {breed.name}
                </li>
                )}
            </ul>
        </div>
        }
    </div>
  )
}

export default BreedAllDropdown