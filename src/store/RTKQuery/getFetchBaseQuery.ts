import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { AppState } from '@/store'

const baseUrl = process.env.BASE_URL + '/api/'

export const getFetchBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as AppState).authUserSlice.token
        const lang = (getState() as AppState).utilitiesSlice.lang

        if (lang) {
            headers.set('Accept-Language', lang)
        }
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})
