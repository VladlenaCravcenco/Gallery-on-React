import axios from 'axios';

async function axiosFetch ( API_URL, formData = {} )  {
    return await axios.post(API_URL, formData,{
        headers: {
            'content-type': 'multipart/form-data',
        },
    }).then( res => {
        return Promise.resolve(res).then(arrList=>{
            return arrList.data;
        }) 
    }); 
}
export default axiosFetch;
