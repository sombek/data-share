import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
                <div className="preloader flex-1 content-center">
                    <div className="logo absolute jump" style={{top: "40%"}}>
                        <img src="/assets/imgs/logos/logo.png" alt="DataShare"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;