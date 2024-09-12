import { fetchWithResponse } from "./fetcher.js"


export function postInquiry(newInquiry) {
    return fetchWithResponse(`inquiries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newInquiry)
    })
}