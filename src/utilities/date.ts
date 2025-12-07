import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);

dayjs.extend(utc);
dayjs.extend(timezone);

export const getDayjs = () => {
    return dayjs;
};

export const toUtcDate = (date: Date | Dayjs): Date => {
    const day = dayjs(date);
    return day.utc().startOf('day').toDate();
};

export const toUtcDateTime = (date: Date | Dayjs): Date => {
    const day = dayjs(date);
    return day.utc().toDate();
};

export const toCairoDate = (date: Date): Dayjs => {
    const day = dayjs(date);
    return day.tz('Africa/Cairo').startOf('day');
};

export const toCairoDateTime = (date: Date): Dayjs => {
    const day = dayjs(date);
    return day.tz('Africa/Cairo');
};

export const formatDateTime = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(date);
};
