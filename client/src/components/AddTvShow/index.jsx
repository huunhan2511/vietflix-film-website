import React, { useState } from 'react';
import StepProgress from '../StepProgress';
import { ACCESS_DENIED, VALIDATE_TVSHOW_INFORMATION,VALIDATE_DATA_TVSHOW,TYPE_TVSHOW,ADD_TVSHOW_SUCCESS } from '../../constant';
import { useQuery,useMutation } from '@apollo/client';
import mutations from '../../mutations';
import Query from '../../query'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import SeasonInformation from '../SeasonInformation';
import TvShowInformation from '../TvShowInformation';
import { toast } from 'react-toastify';

const seasonDefault = {
    nameSeason: "",
    episodes : [
        {
            name: "",
            hour: "",
            minute: "",
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
    return initialIsOpen;
}
const AddTvShow = () => {
    const step = 2;
    const navigate = useNavigate();
    const [progress,setProgress] = useState(1);
    const [tvShow,setTvShow] = useState(tvShowDefault);
    const [isOpen,setIsOpen] = useState([[false]]);
    // const [episodes,setEpisodes] = useState([]);
    const [mutationCreateEpisode] = useMutation(mutations.createEpisode,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        }
    });

    const [mutationCreateSeason] = useMutation(mutations.createSeason,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        }
    });

    const [mutationCreateFilm] = useMutation(mutations.createFilm,{
        onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        }
    })
    const [mutationCreateFilmDetail] = useMutation(mutations.createFilmDetail);

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
        if(!validateTvShowInformation()){
            toast.warning(VALIDATE_TVSHOW_INFORMATION);
            return;
        }
        if(index+1 === progress) return;
        setProgress(index+1);
    }
    const nextStep = () =>{
        if(!validateTvShowInformation()){
            toast.warning(VALIDATE_TVSHOW_INFORMATION);
            return;
        }
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
    const handleChangeGenre = (dataGenres) =>{
        setTvShow({
            ...tvShow,
            genres : dataGenres
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

    const validateDataTvShow = () =>{
        for (let key in tvShow){
            if(key === 'seasons'){
                for (let season of tvShow.seasons) {
                    const validateSeason = validateSeasonEpisodes(season);
                    if (!validateSeason) {
                        return false;
                    }
                }
            }
            if(tvShow[key] === ""){
                return false;
            }
        }
        return true;
    }
    const validateTvShowInformation = () =>{
        for (let key in tvShow){
            if(key === "seasons") continue;
            if(key === 'genres'){
                if(tvShow[key].length === 0){
                    return false;
                }
            }
            if(tvShow[key] === ""){
                return false;
            }
        }
        return true;
    }
    const validateSeasonEpisodes = (season) => {
        if (season.nameSeason === "") {
            return false;
        }
        for (let episode of season.episodes) {
            for(let key in episode){
              if(key === "link_m3u8" || key==="link_embed") continue;
                if(episode[key] === ""){
                    return false;
                }
            }
        }
        return true;
    }
    const handleCreateTvShow = async () => {
        if (!validateDataTvShow()) {
            toast.warning(VALIDATE_DATA_TVSHOW);
            return;
        }
        document.getElementById('loader').classList.add('active');
        const seasonsPromises = tvShow.seasons.map(async (season) => {
            const episodesPromises = season.episodes.map(async (episode) => {
                const episodeData = {
                    name: episode.name,
                    time: episode.hour + "h" + episode.minute + "m",
                    link_m3u8: episode.link_m3u8,
                    link_embed: episode.link_embed
                };
                try {
                    const response = await mutationCreateEpisode({
                        variables: { input: episodeData },
                        context: { headers: { authorization: localStorage.getItem("token") } }
                    });
                    return response.data.createEpisode.id;
                } catch{
                    return null;
                }
            });
            const episodeIds = await Promise.all(episodesPromises);
            if (episodeIds.some(id => id === null)) {
                document.getElementById('loader').classList.remove('active');
                return null; // Skip this season if there was an error creating an episode
            }
            const seasonData = {
                name: season.nameSeason,
                total_episodes: episodeIds.length,
                episodes: episodeIds
            };
            try {
                const response = await mutationCreateSeason({
                    variables: { input: seasonData },
                    context: { headers: { authorization: localStorage.getItem("token") } }
                });
                return response.data.createSeason.id;
            } catch{
                return null;
            }
        });
    
        const seasonIds = await Promise.all(seasonsPromises);
        if (seasonIds.some(id => id === null)) {
            document.getElementById('loader').classList.remove('active');
            // If there was an error creating a season, return without creating the film detail
            return;
        }
    
        const filmDetailData = {
            total_seasons: seasonIds.length,
            seasons: seasonIds,
            episode: null
        };
    
        try {
            const response = await mutationCreateFilmDetail({
                variables: { input: filmDetailData },
                context: { headers: { authorization: localStorage.getItem("token") } }
            });
            const dataFilm = {
                description: tvShow.description,
                filmType: TYPE_TVSHOW,
                filmDetail: response.data.createFilmDetail.id,
                genres: tvShow.genres.map(genre => {return genre.value}),
                img: tvShow.img,
                name: tvShow.nameTvShow
            }
            const result = await mutationCreateFilm({
                variables: { input: dataFilm },
                context: {
                    headers: {
                        authorization: localStorage.getItem("token"),
                    },
                }
            })
            if(result.data){
                toast.success(ADD_TVSHOW_SUCCESS)
                document.getElementById('loader').classList.remove('active');
                setTvShow(tvShowDefault)
            }
        } catch (error) {
            document.getElementById('loader').classList.remove('active');
        }
    };
    
    
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
                    handleChangeGenre = {handleChangeGenre}
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
            {
                progress === step
                 &&  
                <div className='text-white text-xl flex justify-end'>
                    <button className='button-add !py-4 !px-6 disabled:opacity-50' 
                    onClick={handleCreateTvShow}>Hoàn tất</button>
                </div>
            }
           
        </div>
    );
}

export default AddTvShow;


//65055db7b78cf153bcdcb117