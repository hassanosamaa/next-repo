import type { Middleware } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { notification } from 'antd'

interface ErrorPayload {
    data?: {
        Message?: string;
    };
}

export const rtkQueryErrorLogger: Middleware =
    () => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            if (typeof document !== 'undefined') {
                const payload = action.payload as ErrorPayload;
                const errorMessage = payload.data?.Message || 'An error occurred';

                notification.error({
                    title: 'Error',
                    message: errorMessage,
                });
            }
        }
        return next(action)
    }
