const FULL_EVENTS_API = 'https://eventasia-server.vercel.app/events'

export const getEventsApi = () => {
    return fetch(FULL_EVENTS_API)
    .then(res => res.json())
    .then(data => {
        return data
    })
}