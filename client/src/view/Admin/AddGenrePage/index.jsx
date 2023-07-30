import React,{useState} from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import { ACCESS_DENIED,ADD_GENRE_SUCCESS } from '../../../constant';
import { useMutation } from '@apollo/client';
import mutations from '../../../mutations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddGenrePage = () => {
    const navigate = useNavigate();
    const [genre,setGenre] = useState('');
    const [mutationCreateGenre] = useMutation(mutations.createGenre,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{ 
            setGenre('')
            toast.success(ADD_GENRE_SUCCESS)
        }
    });
    const handleChangeGenre = (e)=>{
        setGenre(e.target.value)
    }
    const handleAddGenre = () =>{
        mutationCreateGenre({
            variables: {input : {name:genre}},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
    }
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Thêm thể loại</div>
                    </div>
                    <div className='p-5'>
                        <form>
                            <div className='w-full flex'>
                                <label className='w-44 p-5 bg-red-700'>Tên thể loại</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="name"
                                value={genre}
                                onChange={handleChangeGenre}
                                />
                            </div>
                        </form>
                        <div className='text-white flex justify-end mt-5'>
                                <button className='px-10 py-4 bg-red-700 rounded-md disabled:opacity-50' 
                                disabled={genre === '' ? true : false}
                                onClick={()=>handleAddGenre()}
                                >
                                    Thêm thể loại
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default AddGenrePage;
