import React from 'react'
import { LayoutAdmin } from '../../../components/LayoutAdmin'
import AddCategoryAdmin from './AddCategory'

export default function AddCategory() {
    return (
        <LayoutAdmin childComponent={<AddCategoryAdmin />}></LayoutAdmin>
    )
}