import axios from "axios";

const fetchAllArticles = (topic) => {
    return axios.get('https://cr-nc-news.herokuapp.com/api/articles',{params:{sortBy: null,order: null,topic}}).then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

const fetchAllTopics = () => {
    return axios.get('https://cr-nc-news.herokuapp.com/api/topics').then((res)=>{
        return res;
    }).catch((err) => {
        console.log(err);
    })
}

export { fetchAllArticles, fetchAllTopics };