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

export function deleteTrack(id) {
	return http.delete('http://localhost:3002/db/' + 'tracks/'+id);
}

export function getFavourite() {
	return http.get("http://localhost:3002/db/tracks");
}
