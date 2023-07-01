import React, { useState } from 'react';
import { typeAddFilm } from '../../../constant';
import LayoutAdmin from '../../../components/LayoutAdmin';
import DrawMovie from '../../../components/DrawMovie';

import AddMovie from '../../../components/AddMovie';
const AddMoviePage = () => {
    
    const [typeAdd,setTypeAdd] = useState(typeAddFilm.DrawLink);
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Thêm phim lẻ</div>
                        <div className="mydict">
                            <div>
                                <label>
                                    <input onChange={(e)=>setTypeAdd(e.target.value)} type="radio" name="radio" checked={typeAdd === typeAddFilm.DrawLink} value={typeAddFilm.DrawLink}/>
                                    <span className="text-xl">Nhập đường dẫn</span>
                                </label>
                                <label>
                                    <input onChange={(e)=>setTypeAdd(e.target.value)} type="radio" name="radio" checked={typeAdd === typeAddFilm.OnInput} value={typeAddFilm.OnInput}/>
                                    <span className='text-xl'>Nhập thông tin</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {
                        typeAdd === typeAddFilm.DrawLink 
                        ?
                        <DrawMovie/>
                        :
                        <AddMovie/>
                    }
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default AddMoviePage;
