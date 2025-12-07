import { getFetchBaseQuery } from '@/store/RTKQuery/getFetchBaseQuery'
import { IResponse } from '@/models/response'
import { IAuthUserModel } from '@/models/user'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: getFetchBaseQuery,
    endpoints: (build) => ({
        getUserDetails: build.query<IResponse<IAuthUserModel>, { token: string }>({
            query: (data) => ({
                url: 'auth/me',
                headers: {
                    authorization: `Bearer ${data.token.toString()}`,
                },
            }),
        }),
    }),
})
