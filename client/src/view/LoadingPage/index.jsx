import React from "react"
import Mylayout from "../../components/Mylayout"
const LoadingPage = () =>{
    return (
        <>
            <Mylayout>
            <div className="relative">
                <div class="movie--isloading ">
                    <div class="loading-image"></div>
                </div>
                <div className="absolute left-[5%] top-[25%] min-w-[90%] h-[50%]">
                    <div class="loading-content">
                        <div class="loading-text-container">
                            <div class="loading-main-text"></div>
                            <div class="loading-sub-text"></div>
                        </div>
                        <div class="loading-btn"></div>
                    </div>

                </div>
            </div>    
            </Mylayout>
        </>
    )
}
export default LoadingPage