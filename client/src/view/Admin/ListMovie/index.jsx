import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { ListMoive } from './ListMovie'

export default function ListMovie() {
    return (
        <>
            <LayoutAdmin childComponent={<ListMoive />}></LayoutAdmin>
        </>
    )
}
