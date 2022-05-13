import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { AddTvShow } from './AddTvShow'

export default function TvShow() {
    return (
        <>
            <LayoutAdmin childComponent={<AddTvShow />}></LayoutAdmin>
        </>
    )
}
