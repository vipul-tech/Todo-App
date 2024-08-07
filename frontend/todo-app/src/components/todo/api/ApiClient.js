import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL : 'http://localhost:5000' //CHANGE FOR AWS
        //baseURL : 'http://todorestapi-env.eba-bcemqucs.ap-south-1.elasticbeanstalk.com/'
    }
)