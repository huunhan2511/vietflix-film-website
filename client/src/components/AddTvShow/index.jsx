import React, { useEffect, useState } from 'react';
import StepProgress from '../StepProgress';
import { ACCESS_DENIED,MULTI_SELECT_GENRE } from '../../constant';
import { useQuery } from '@apollo/client';
import Query from '../../query'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import SeasonInformation from '../SeasonInformation';
import TvShowInformation from '../TvShowInformation';

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
const tvShowDefault = 
    {
        nameTvShow: "",
        genres : [],
        img: "",
        description : "",
        seasons: [
            seasonDefault
        ]
    }
    const handleInitialIsOpen = (newseasons) =>{
        let initialIsOpen = [];
        newseasons.forEach((season, index) => {
            initialIsOpen[index] = Array(season.episodes.length).fill(false);
        });
        console.log(initialIsOpen)
        return initialIsOpen;
    }
    const AddTvShow = () => {
        const step = 2;
        const navigate = useNavigate();
        const [progress,setProgress] = useState(1);
        const [tvShow,setTvShow] = useState(tvShowDefault);
        const [isOpen,setIsOpen] = useState([[false]]);

    const queryCheckToken = useQuery(Query.qCheckToken,{
        context: {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        },
        onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/")
            }
        }
    })

    
    const handleStep = (index) =>{
        if(index+1 === progress) return;
        setProgress(index+1);
    }
    const nextStep = () =>{
        var next = progress + 1;
        setProgress(next);
    }
    const previousStep = () =>{
        var previous = progress - 1;
        setProgress(previous);
    }
    const addSeason = () => {
        const newseasons =  [...tvShow.seasons, seasonDefault]
        setTvShow({
            ...tvShow,
            seasons: newseasons
        });
        setIsOpen(handleInitialIsOpen(newseasons));
    }
    const removeSeason = (indexToRemove) => {
        setTvShow({
            ...tvShow,
            seasons: tvShow.seasons.filter((_, index) => index !== indexToRemove)
        });
    }
    const addEpisode = (seasonIndex) => {
        setTvShow(prevTvShow => {
            return {
                ...prevTvShow,
                seasons: prevTvShow.seasons.map((season, index) => {
                    if (index === seasonIndex) {
                        return {
                            ...season,
                            episodes: [...season.episodes, {
                                name: "",
                                hour: 0,
                                minute: 0,
                                link_embed: "",
                                link_m3u8: ""
                            }]
                        };
                    }
                    return season;
                })
            };
        });
    }
    
    const deleteEpisode = (seasonIndex, indexEpisode) => {
        if (tvShow.seasons[seasonIndex].episodes <= 1) return;
        setTvShow(prevTvShow => {
            return {
                ...prevTvShow,
                seasons: prevTvShow.seasons.map((season, index) => {
                    if (index === seasonIndex) {
                        return {
                            ...season,
                            episodes: season.episodes.filter((_, episodeIndex) => episodeIndex !== indexEpisode)
                        };
                    }
                    return season;
                })
            };
        });
    }
    const handleChangeTvShowInformation = (event) =>{
        setTvShow({
            ...tvShow,
            [event.target.name]: event.target.value
        })
    }

    // Function to handle change in nameSeason
    const handleChangeNameSeason = (index, newName) => {
        setTvShow(prevTvShow => {
            const updatedSeasons = [...prevTvShow.seasons];
            updatedSeasons[index] = {
                ...updatedSeasons[index],
                nameSeason: newName
            };
            return {
                ...prevTvShow,
                seasons: updatedSeasons
            };
        });
    };
    const handleChangeEpisodeInformation = (seasonIndex, episodeIndex, field, value) => {
        setTvShow(prevTvShow => {
            const updatedSeasons = prevTvShow.seasons.map((season, sIndex) => {
                if (sIndex === seasonIndex) {
                    const updatedEpisodes = season.episodes.map((episode, eIndex) => {
                        if (eIndex === episodeIndex) {
                            return {
                                ...episode,
                                [field]: value
                            };
                        }
                        return episode;
                    });
                    return {
                        ...season,
                        episodes: updatedEpisodes
                    };
                }
                return season;
            });
            return {
                ...prevTvShow,
                seasons: updatedSeasons
            };
        });
    };
    const openModal = (indexSeason, indexEpisode) => {
        setIsOpen(prevState => {
            let newState = { ...prevState };
            newState[indexSeason][indexEpisode] = true;
            return newState;
        });
    }
    const closeModal = (indexSeason,indexEpisode) => {
        setIsOpen(prevState => {
            let newState = { ...prevState };
            newState[indexSeason][indexEpisode] = false;
            return newState;
        });
    }
    return (
        <div className='p-5'>
            <StepProgress 
                step={step} 
                progress={progress} 
                styleDefault='border-2 rounded-full w-14 h-14 flex items-center justify-center'
                styleActive='border-2 rounded-full w-14 h-14 flex items-center justify-center border-[#B91c1c] bg-[#B91c1c]'
                lineDefault = 'border-t border-white w-1/5 self-center'
                lineProgress = 'border-t border-[#B91c1c] w-1/5 self-center'
                handleStep={handleStep}
                />
                
            {/* TVSHOW Information */}
            <div className={progress === 1 ? "py-8" : "hidden"}>
                <TvShowInformation 
                    nextStep={nextStep} 
                    tvShow={tvShow}
                    handleChangeInput = {handleChangeTvShowInformation}
                />
            </div>

            {/* Season Information  */}
            <div className={progress === step ? "py-8" : "hidden"}>
                <div className="header-content-admin text-white flex justify-between">
                    <FontAwesomeIcon icon={faChevronLeft} className='px-5 text-4xl' onClick={previousStep}/>
                    <div><button className='!px-10 py-4 bg-red-700 rounded-md button-update' onClick={addSeason}>Thêm mùa</button></div>
                </div>
                {tvShow.seasons.map((season,indexSeason) => (
                     <SeasonInformation
                     key= {indexSeason}
                     handleDeleteEpisode  = {deleteEpisode}
                     removeSeason = {removeSeason}
                     addEpisode = {addEpisode}
                     seasons = {season}
                     handleChangeNameSeason={handleChangeNameSeason} 
                     handleChangeEpisode={handleChangeEpisodeInformation}
                     openModal ={openModal}
                     closeModal= {closeModal}
                     keyOpenModal={isOpen}
                     indexSeason={indexSeason}
                     lengthSeason = {tvShow.seasons.length}
                 />
                ))}
            </div>

            <div className='text-white text-xl flex justify-end'>
                    <button className='button-update !py-4 !px-6' onClick={()=>{console.log(tvShow)}}>Hoàn tất</button>
            </div>
        </div>
    );
}

export default AddTvShow;
