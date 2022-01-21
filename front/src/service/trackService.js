import http from './httpService';

const apiEndpoint = 'http://localhost:3002/search/';

export function getTracks(artistName) {
	return http.get(apiEndpoint + artistName);
}

export function saveTrack(track) {
	// if (track.id) {
	// 	const body = { ...track };
	// 	delete body.id;
	// 	return http.put(apiEndpoint + 'add-track/', body);
	// }

	return http.post('http://localhost:3002/db/' + 'tracks', track);
}

export function deleteTrack(trackName) {
	return http.delete(apiEndpoint + 'delete/selectedTrack/' + trackName + '/');
}

export function getFavourite() {
	return http.get('http://localhost:3002/db/' + 'tracks');
}
