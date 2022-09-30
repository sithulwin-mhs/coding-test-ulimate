import { useState } from 'react'

export function Hook () {
    const [showRow, SetShowRow] = useState(false)

    const paginateRowList = [
        {id:1, value: 10},
        {id:2, value: 20},
        {id:3, value: 30},
        {id:4, value: 40}
    ]

    const showDropdown = () => {
        SetShowRow(!showRow)
    }

    return [
        paginateRowList,
        showRow,
        /**
         * action
         */
        showDropdown
    ]
}