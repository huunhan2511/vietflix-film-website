import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { TvShow } from './TvShow'

export default function TvShowAdmin() {
    return (
        <>
            <LayoutAdmin childComponent={<TvShow />}></LayoutAdmin>
        </>
    )
}
