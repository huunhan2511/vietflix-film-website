import React from "react"
import Mylayout from "../../components/Mylayout"
const LoadingPage = ({page = "home"}) =>{
    return (
        <>
            <Mylayout>
            {
                page === "home"
                ?
                <div className="relative animate-pulse ">
                    <div className="movie--isloading ">
                        <div className="loading-image min-h-[100vh]"></div>
                    </div>
                    <div className="absolute top-20 md:top-[8%] min-w-[100%] min-h-[90vh]">
                        <div className="loading-content bg-neutral-800 h-[90vh] md:grid md:grid-cols-2">
                            <div className=" loading-text-container lg:px-44 lg:py-56 md:px-20 md:py-36 px-10 py-20 flex justify-center md:block">
                                <div className="loading-main-text bg-neutral-700 lg:w-[90%] md:w-[130%] w-[90%] h-20 rounded-lg mb-10"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[150%] md:w-[150%] h-5 mt-5 rounded-lg"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[150%] md:w-[150%] h-5 mt-5 rounded-lg"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[150%] md:w-[150%] h-5 mt-5 rounded-lg"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[150%] md:w-[150%] h-5 mt-5 rounded-lg"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[90%] md:w-[100%] h-5 mt-5 rounded-lg"></div>
                                <div className="hidden md:block bg-neutral-700 lg:w-[60%] md:w-[70%] h-16 mt-5 rounded-lg"></div>
                            </div>
                            <div className="md:hidden bg-neutral-700 w-[50%] h-16 rounded-lg mx-[25%] mb-10"></div>
                            <div className="flex place-content-center items-center ">
                                <div className="bg-neutral-700 w-[40%] h-14 md:h-28 rounded-lg mx-[30%] md:mx-0"></div>
                            </div>
                        </div>
                    </div>
                </div>  
                :
                <div className="w-[30%] bg-neutral-700 mt-20"></div>  
            }
            {
                page !== "tim-kiem" && page !== "tat-ca"
                ?
                <>
                <div className="animate-pulse px-20 py-10">
                    <div className="flex justify-between">
                        <div className="h-14 w-[25%] md:w-[15%] bg-neutral-800 rounded-lg"></div>
                        <div className="h-8 w-[8%] bg-neutral-800 rounded-lg self-end"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
                        <div className="bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-pulse px-20 py-10">
                <div className="flex justify-between">
                        <div className="h-14 w-[25%] md:w-[15%] bg-neutral-800 rounded-lg"></div>
                        <div className="h-8 w-[8%] bg-neutral-800 rounded-lg self-end"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
                        <div className="bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-pulse px-20 py-10">
                    <div className="flex justify-between">
                        <div className="h-14 w-[25%] md:w-[15%] bg-neutral-800 rounded-lg"></div>
                        <div className="h-8 w-[8%] bg-neutral-800 rounded-lg self-end"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
                        <div className="bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="animate-pulse px-20 py-10">
                    <div className="flex justify-between">
                        <div className="h-14 w-[25%] md:w-[15%] bg-neutral-800 rounded-lg"></div>
                        <div className="h-8 w-[8%] bg-neutral-800 rounded-lg self-end"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
                        <div className="bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                            <div className="px-10 py-12">
                                <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                <div className="grid grid-cols-2">
                                    <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                    <div className="flex items-center place-content-end mt-8">
                                        <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                :
                <>
                    <div className="animate-pulse px-20 py-10">
                        <div className="flex justify-between">
                            <div className="h-14 w-[25%] md:w-[15%] bg-neutral-800 rounded-lg"></div>
                        </div>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">
                            <div className="bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden sm:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block bg-neutral-800 h-56 rounded-md">
                                <div className="px-10 py-12">
                                    <div className="h-8 bg-neutral-700 w-[70%]"></div>
                                    <div className="grid grid-cols-2">
                                        <div className="h-14 bg-neutral-700 w-[80%] mt-10"></div>
                                        <div className="flex items-center place-content-end mt-8">
                                            <div className="h-16 w-16 rounded-full bg-neutral-700"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            
            </Mylayout>
        </>
    )
}
export default LoadingPage