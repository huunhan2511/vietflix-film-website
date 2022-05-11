import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { AddTvShow } from './AddTvShow'

export default function TvShowAdmin() {
    return (
        <>
            <LayoutAdmin childComponent={<AddTvShow />}></LayoutAdmin>
        </>
    )
}
