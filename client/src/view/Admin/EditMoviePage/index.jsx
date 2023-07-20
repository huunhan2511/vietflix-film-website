import React, { useState } from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import EditMovie from '../../../components/EditMovie';
import {useLocation} from "react-router-dom";

const EditMoviePage = () => {
    const location = useLocation();
    const [filmId] = useState(location.state.idFilm);
    
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Cập nhật thông tin phim</div>
                    </div>
                    <EditMovie filmId={filmId}/>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default EditMoviePage;
