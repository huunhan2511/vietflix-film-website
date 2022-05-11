import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { Home } from "./Home"

export default function HomeAdmin() {
    return (
        <>
            <LayoutAdmin childComponent={<Home />}></LayoutAdmin>
        </>
    )
}
