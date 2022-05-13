import React from 'react'
import { LayoutAdmin } from '../../../components/LayoutAdmin'
import AddMovie from './AddMovie'

export default function Movie() {
    return (
        <LayoutAdmin childComponent={<AddMovie />}/>
    )
}