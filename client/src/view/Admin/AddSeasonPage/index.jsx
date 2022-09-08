import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import AddSeasonLayout from './AddSeasonLayout'

export default function AddSeasonPage() {
    return (
        <>
            <LayoutAdmin childComponent={<AddSeasonLayout/>}></LayoutAdmin>
        </>
    )
}
