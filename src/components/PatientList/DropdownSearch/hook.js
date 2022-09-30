import { useState } from 'react'

export function Hook () {
    const [showStatus, SetShowStatus] = useState(false)
    const statusDropdownList= [
        {id:1, name:"Milo Status"},
        {id:2, name:"MJ Status"},
        {id:3, name:"Sky Status"},
        {id:4, name:"Lu Lu Status"}
    ]

    const breedDropdownList = [
        {id:1, name:"Milo Breed"},
        {id:2, name:"MJ Breed"},
        {id:3, name:"Sky Breed"},
        {id:4, name:"Lu Lu Breed"}
    ]

    const showDropdown = () => {
        SetShowStatus(!showStatus)
    }

    return [
        statusDropdownList,
        showStatus,
        breedDropdownList,
        /**
         * action
         */
        showDropdown
    ]
}