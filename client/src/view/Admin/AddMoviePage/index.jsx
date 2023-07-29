import React from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import DrawMovie from '../../../components/DrawMovie';

const AddMoviePage = () => {
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Thêm phim lẻ</div>
                    </div>
                    <DrawMovie/>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default AddMoviePage;