import React from 'react'
import {LayoutAdmin} from '../../../components/LayoutAdmin'
import EditEpisode from './EditEpisode'
export default function EditEpisodeAdmin () {
    return (
        <LayoutAdmin childComponent={<EditEpisode />}/>
    )
}