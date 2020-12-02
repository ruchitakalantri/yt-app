import axios from 'axios';

const KEY = 'AIzaSyDznYzNcuc5i5xaC52SvGxBdMJ3s8RTHRk';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5 ,
        key : KEY
    }
});