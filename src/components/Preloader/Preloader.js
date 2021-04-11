import React from 'react'

const Preloader = (props) => {
    const { isLoading } = props;
        return (
<>
            {isLoading
                ? (
                  <>
                 
        <div className="preloader">
        <div className="preloader__container">
            <span className="preloader__round"></span>
        </div>
    </div>
                    </>
                )
                : (
                    <>
                    
            </>
                )}

            
    </>
        )
    
}

export default Preloader

           
//     )

// import React from 'react'

// const Preloader = (props) => {
    
//         return (
//         // <div className="preloader">
//         <div className={`${props.isPageLoading ? '' : 'preloader'}`}>
//         <div className="preloader__container">
//             <span className="preloader__round"></span>
//         </div>
//     </div>
//                 )
            
//             }

    

