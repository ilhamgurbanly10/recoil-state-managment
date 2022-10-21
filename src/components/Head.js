import React from "react";
import {Helmet} from "react-helmet";
import {FlashGetPageName} from './flash/Functions' 

 
function Head()  {

    return (
      <>
        <Helmet>
            <title>Az Construction - {FlashGetPageName()}</title>
        </Helmet>
      </>
    );

};

export default Head;