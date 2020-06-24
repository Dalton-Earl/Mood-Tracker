import axios from 'axios';

export default {
    getMoods: function(){
        return axios.get(`/api/moods`);
    },
    getMoodId: function(id){
        return axios.get(`/api/moods${id}`);
    },
    getMoodDate: function(date){
        return axios.get(`/api/moods${date}`)
    },
    updateMood: function(id){
        return axios.put(`api/moods${id}`)
    },
    saveMood: function(moodData){
        return axios.post(`/api/moods`, moodData)
    }

};
