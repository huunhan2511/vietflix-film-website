import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalTvShowEpisode from '../ModalTvShowEpisode';
const seasonDefault = {
    nameSeason: "",
    episodes : [
        {
            name: "",
            hour: 0,
            minute: 0,
            link_embed: "",
            link_m3u8: ""
        }
    ]
}
const SeasonInformation = (
    {
        handleDeleteEpisode  = () => {},
        removeSeason = () => {},
        addEpisode = () =>{},
        handleChangeNameSeason = ()=>{},
        handleChangeEpisode = ()=>{},
        openModal= ()=>{},
        closeModal = ()=>{},
        season = seasonDefault,
        indexSeason = 0,
        keyOpenModal = [[false]],
        lengthSeason = 1
    }
) => {
    const [key,setKey] = useState(0);
    const [dataSeason,setDataSeason] = useState(season);
    const openSeason = (index) =>{
        setKey(index);
    }
    const closeSeason = () =>{
        setKey(0);
    }
    const handleAddEpisode = () =>{
        addEpisode(indexSeason);
        setDataSeason({...dataSeason,
            episodes: [...dataSeason.episodes, {
                name: "",
                hour: 0,
                minute: 0,
                link_embed: "",
                link_m3u8: ""
            }]}
            )
    }
    const handleDeleteDataEpisode = (indexSeason,indexEpisode) =>{
        if(dataSeason.lenght <= 1) return;
        handleDeleteEpisode(indexSeason,indexEpisode);
        setDataSeason({
            ...dataSeason,
            episodes : dataSeason.episodes.filter((episode,index) =>{return index != indexEpisode})
        })
    }
    const handleChangeSeasonInformation = (index, newName) => {
        setDataSeason({...dataSeason,  nameSeason: newName});
        handleChangeNameSeason(index, newName);
    };

    return (
    <>    
        <div className='py-4'>
            <div key={indexSeason} className='border-2 border-zinc-700 rounded-md p-5 mb-4'>
                <div  className='flex justify-between items-center'>
                    <div className={key===indexSeason+1 ? 'w-10/12 flex' : 'w-11/12 flex'}>
                        <label className='w-44 p-5 bg-red-700'>Tên mùa</label>
                        <input 
                            className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                            name="nameSeason" 
                            value={dataSeason.nameSeason}
                            onChange={(event) => handleChangeSeasonInformation(indexSeason, event.target.value)}
                        />
                    </div>
                    
                    <button className={ key===indexSeason+1 ? '!px-5 !py-5 bg-red-700 rounded-md button-update' : 'hidden' } onClick={handleAddEpisode} >Thêm tập</button>
                    {
                    key === indexSeason+1
                    ? 
                    <FontAwesomeIcon icon={faChevronUp} className='text-4xl' onClick={()=>closeSeason()}/>
                    :
                    <FontAwesomeIcon icon={faChevronDown} className='text-4xl' onClick={()=>openSeason(indexSeason+1)}/>
                    }
                    {lengthSeason > 1 && <FontAwesomeIcon icon={faXmark} className='text-4xl' onClick={()=>removeSeason(indexSeason)}/>}
                </div>
                <div className={key === indexSeason+1 ? 'text-white py-4 grid grid-cols-9 gap-4' : 'hidden'}>
                    { dataSeason.episodes.map((episode,indexEpisode)=>{
                        return(
                        <React.Fragment key={indexEpisode}>
                        <div  
                            className='border-2 border-zinc-700 py-5 flex justify-center items-center text-center'
                            onClick={()=>openModal(indexSeason,indexEpisode)}
                        >
                            {indexEpisode+1}
                        </div>
                        <ModalTvShowEpisode 
                        episode={episode}
                        isOpen={keyOpenModal[indexSeason][indexEpisode]} 
                        closeModal={()=>closeModal(indexSeason,indexEpisode)} 
                        handleDelete={()=>handleDeleteDataEpisode(indexSeason,indexEpisode)}
                        handleChangeEpisode={handleChangeEpisode}
                        indexSeason = {indexSeason}
                        indexEpisode = {indexEpisode}
                        />
                        </React.Fragment>
                    )})
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default SeasonInformation