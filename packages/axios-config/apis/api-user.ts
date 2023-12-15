import axiosInstance from '../createAxios'

export const getLoggedUser = async (key: any) => {
    return axiosInstance.get('')
    .then(response => {
        const data = response.data;
        return data[key]
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

export const postLoggedUser = async (newData: any) => {
    return axiosInstance.post('', newData)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.error('Error:', error);
    });
}