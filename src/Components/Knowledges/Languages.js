import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component { 
    state={
        Languages:[
            {id:1,value:"PYTHON"},
            {id:2,value:"JAVASCRIPT"},
            {id:3,value:"PHP"},
            {id:4,value:"CSS"},
            {id:5,value:"DART"},
            {id:7,value:"HTML"},
        ],
        Frameworks:[
            {id:1,value: "SYMFONY"},
            {id:1,value: "REACT"},
            {id:1,value: "FLUTTER"},
            {id:1,value: "BOOTSTRAP"},
            {id:1,value: "JQUERY"},
            
        ]
    }
    render() {
        let{Languages, Frameworks}=this.state;
        return ( 
            <div className='languages'>
                LANGUEGES & FRAMEWORKS

                <div className='languagesContent'>
                    <ProgressBar languages={Languages}
                    
                     className="languagesDisplay"
                     title="languages"
                    />
                    
                    <ProgressBar
                    title="FRAMEWORKS & BIBLIOTHEQUES"
                    className="frameworksDisplay"
                    languages={Frameworks}
                    />
                    


                </div>
            </div>
        );
    }
}

export default Languages;
