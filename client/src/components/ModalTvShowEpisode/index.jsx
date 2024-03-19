import React, {useState} from 'react'
import Modal from 'react-modal';
import { EPISODES } from '../../constant';

const episodeDefault =  
    {
        name: "",
        hour: "",
        minute: "",
        link_embed: "",
        link_m3u8: ""
    };
const ModalTvShowEpisode = ({
    episode = episodeDefault,
    handleDelete = () =>{},
    handleConfirm = () =>{},
    closeModal = () =>{},
    handleChangeEpisode = () =>{},
    isOpen,
    indexSeason,
    indexEpisode
}) => {
  const [dataEpisode,setDataEpisode] = useState(episode)
  const handleDeleteEpisode = (indexSeason, indexEpisode) =>{
    handleDelete(indexSeason, indexEpisode);
    closeModal();
  }
  const handleConfirmEpisode = () =>{
    handleConfirm();
    closeModal();
  }
  const handleChangeEpisodeInformation = (indexSeason,indexEpisode, name,value) =>{
    if (name === "minute") {
      value = parseInt(value) > 59 ? 59 : parseInt(value) < 0 ? 0 : value;
    } else if (name === "hour") {
        value = parseInt(value) < 0 ? 0 : value;
    }
    setDataEpisode({...dataEpisode, [name]:value});
    handleChangeEpisode(indexSeason,indexEpisode, name,value);
  }

  const validateDataEpisode = () => {
    for (let key in dataEpisode) {
      if(key === "link_m3u8" || key==="link_embed") continue;
      if (dataEpisode[key] === "") {
          return false;
      }
    }
    return true;
  }
  return(
    <Modal
        ariaHideApp={false}
        className="ModalTvShowEpisode"
        overlayClassName="Overlay"
        isOpen={isOpen}
        onRequestClose = {closeModal}
    >
      <div className='h-5/6 text-white flex items-center justify-center align-middle'>
        <form>
          <div className='w-full flex'>
              <label className='w-44 p-5 bg-red-700'>Tên tập</label>
              <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
              name="name"
              value= {dataEpisode.name}
              onChange={(event) => handleChangeEpisodeInformation(indexSeason, indexEpisode, event.target.name, event.target.value)}
              />
          </div>
          <div className='w-full flex'>
              <label className='w-44 p-[1.20rem] bg-red-700'>Thời lượng</label>
              <div className='flex w-[50%]'>
                  <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="hour"
                  type="number"
                  min="0"
                  value= {dataEpisode.hour}
                onChange={(event) => handleChangeEpisodeInformation(indexSeason, indexEpisode, event.target.name, event.target.value)}
              />
                  <label className='w-28 p-5 bg-red-700'>giờ</label>
              </div>
              <div className='flex w-[50%]'>
                  <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="minute" 
                  type="number"
                  min="0"
                  max="60"
                  value= {dataEpisode.minute}
                  onChange={(event) => handleChangeEpisodeInformation(indexSeason, indexEpisode, event.target.name, event.target.value)}
              />
                  <label className='w-28 p-5 bg-red-700'>phút</label>
              </div>
          </div>
         {
                Object.keys(EPISODES).map((item,key)=>{
                    return(
                    <div className='w-full flex' key={key}>
                        <label className='w-44 p-5 bg-red-700'>{item}</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name={item}
                        value={dataEpisode[item]}
                        onChange={(event) => handleChangeEpisodeInformation(indexSeason, indexEpisode, event.target.name, event.target.value)}
                        />
                    </div>
                    )
                })
            }
        </form>
      </div>
      <div className='text-white flex justify-center items-center align-middle'>
        <div className='w-10/12 justify-between flex'>
            <button className='button-add px-10 py-4 bg-red-700 rounded-md disabled:opacity-50 mx-5' 
              onClick={()=>handleDeleteEpisode(indexSeason,indexEpisode)}
            >
                Xóa tập
            </button>
            <button className='button-edit px-10 py-4 bg-red-700 rounded-md disabled:opacity-50 mx-5'
              disabled = {!validateDataEpisode() ? true : false } 
              onClick={handleConfirmEpisode}
            >
                Thêm phim
            </button>
        </div>
      </div>
    </Modal>
    
  )
};
export default ModalTvShowEpisode;