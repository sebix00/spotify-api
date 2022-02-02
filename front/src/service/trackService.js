import http from './httpService';

const apiEndpoint = 'http://localhost:3002/';

export const getTracks=(artistName)=> http.get(`${apiEndpoint}search/${artistName}`);


export const saveTrack=(track)=> http.post(`${apiEndpoint}db/tracks`, track);


export const deleteTrack=(id)=>  http.delete(`${apiEndpoint}db/tracks/${id}`);


export const getFavourite=() => http.get(`${apiEndpoint}db/tracks`);

