import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import EditSeason from "./EditSeason";

export default function EditSeasonAdmin() {
  return (
    <LayoutAdmin childComponent={<EditSeason/>}></LayoutAdmin>
  )
}
