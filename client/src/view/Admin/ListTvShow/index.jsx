import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { ListTvShow } from './ListTvShow'

export default function TvShowAdmin() {
    return (
        <>
            <LayoutAdmin childComponent={<ListTvShow />}></LayoutAdmin>
        </>
    )
}
