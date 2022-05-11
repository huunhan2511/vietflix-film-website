import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { Moive } from './Movie'

export default function MovieAdmin() {
    return (
        <>
            <LayoutAdmin childComponent={<Moive />}></LayoutAdmin>
        </>
    )
}
