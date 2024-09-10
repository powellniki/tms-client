import { fetchWithResponse, fetchWithoutResponse } from './fetcher'


export function getProjects() {
    return fetchWithResponse(`projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export function getProjectById(projectId) {

}