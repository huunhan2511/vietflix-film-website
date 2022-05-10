import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import { Home } from "./Home"

export default function HomePage() {
    return (
        <>
            <LayoutAdmin childComponent={<Home />}></LayoutAdmin>
        </>
    )
}
