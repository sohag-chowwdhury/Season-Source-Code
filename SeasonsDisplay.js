import './SeasonsDisplay.css';
import React from 'react';


const seasonsConfig={
    Summer:{
        text:"Let's hit the beach",
        iconName: 'sun'
    },
    Winter:{
        text:'Burr it is cold!!!',
        iconName: 'snowflake'
    }
}


const getSeasons = (lat,month)=>{
    if(month >2 && month<9){
        return lat>0 ? 'Summer' :'Winter';
    }else {
        return lat >0 ? 'Winter' : 'Summer';
    }
}


const SeasonsDisplay = (props) =>{
    const season= getSeasons(props.lat, new Date().getMonth()); 
    const {text, iconName}=seasonsConfig[season]
    return(
        <div className={`seasons-display ${season}` }>
            <i className={`icon-left massive ${iconName} icon`}/>
                <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonsDisplay;