import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const TableGerne = ({data,title,functionButton}) => {
    const [genres,setGenres] = useState(data)
    const navigate = useNavigate();
    const handleEditGenre = (genreId) => {
        navigate(`/admin/sua-the-loai/${genreId}`,{state:{idGenre:genreId}})

    }
    return (
        <>
            <div
            style={{ backgroundColor: "#141414" }}
            className="flex justify-center min-h-screen"
            >
                <div
                    style={{ backgroundColor: "#191919" }}
                    className="w-full m-8 rounded-xl"
                >
                    <div className="header-content-admin text-white flex justify-between">
                    <div>{title}</div>
                    {
                        functionButton 
                        && 
                        <div>
                        <button 
                        className='bg-red-700 px-5 py-2 rounded-xl text-xl' 
                        onClick={()=>functionButton()}>
                            Thêm thể loại
                        </button>
                        </div>
                    }
                    </div>
                    <div className="m-4 h-auto">
                    <table className='text-white min-w-full border-collapse border-slate-700 border'>
                        <thead className='bg-red-700 text-white w-100'>
                        <tr className='w-100'>
                            <th className='p-4'>ID</th>
                            <th>Thể loại</th>
                            <th>Chức năng</th>
                        </tr>
                        </thead>
                        <tbody >
                            {
                                genres.map((genre,key)=>{
                                    return (
                                        <tr key={key} className='text-white'>
                                            <td className='border-slate-700 border p-4'>{genre.id}</td>
                                            <td className='border-slate-700 border min-w-[25rem] max-w-[25rem] break-words p-4'>{genre.name}</td>
                                            <td className='grid grid-cols-2 place-items-center p-4 border-slate-700 border justify-center'>
                                                <button className='bg-green-500 px-8 py-2 rounded-full' onClick={()=>handleEditGenre(genre.id)}>Sửa</button>
                                                <button className='bg-red-700 px-8 py-2 rounded-full'>Xóa</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableGerne;
