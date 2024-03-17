import React from 'react';

const StepProgress = ({step = 1, progress = 1, styleDefault = "", styleActive ="" , lineDefault ="" , lineProgress = "",  handleStep = () => {}}) => {
    return (
        <>
            <div className='text-white text-xl'>
                <ul className='flex justify-center'>
                    {
                        Array.from({ length: step }, (_, index) => (
                            index === step - 1 
                            ? 
                                <li key={index} className={progress >= index+1 ? styleActive : styleDefault} onClick={()=>handleStep(index)}>{index+1}</li>
                            :
                            <React.Fragment key={index}>
                                <li key={index} className={progress >= index+1 ? styleActive : styleDefault} onClick={()=>handleStep(index)}>{index+1}</li>
                                {
                                    progress > index+1
                                    ?    
                                    <span className={lineProgress}></span>
                                    :
                                    <span className={lineDefault}></span>
                                }
                            </React.Fragment>
                        ))
                    }
                
                </ul>
            </div>  
        </>
    );
}

export default StepProgress;