import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { AllFilmAdmin } from './AllFilmAdmin'
export default function AllFilmAdminIndex() {

    return (
        <>
            <LayoutAdmin childComponent={<AllFilmAdmin />}></LayoutAdmin>
        </>
    )
}
