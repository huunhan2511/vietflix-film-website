import React from 'react'
import { LayoutAdmin } from '../../../components/LayoutAdmin'
import ListCategoryAdmin from './ListCategory'

export default function ListCategory() {
    return(
        <>
            <LayoutAdmin childComponent={<ListCategoryAdmin />}/>
        </>
    )
}