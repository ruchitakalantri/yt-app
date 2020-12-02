// Hook for searching for videos

import {useState , useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {

    const [videos , setVideos] = useState([]);

     // [] empty array means run this useEffect only one time
     useEffect( () => {
        search(defaultSearchTerm);
    } , [defaultSearchTerm]);

    // LIST OF VIDEO
    const search = async (term) => {
        console.log(term);

        // asyncronus API request
        const response = await youtube.get('/search' , {
            params : {
                q : term
            }
        });

        console.log(response);
        setVideos(response.data.items); 
    };

    return [videos, search];

};

export default useVideos;