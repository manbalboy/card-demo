import commonUtil from './common-util';

export default {
    parse(dateStringInRange) {
        let isoExp = /^\s*(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?\s*$/;
        let date, month, parts;
        if (dateStringInRange instanceof Date) {
            return commonUtil.clone(dateStringInRange);
        }

        dateStringInRange = (dateStringInRange + '').replace(/[^\d]+/g, '');
        if (dateStringInRange.length !== 8 && dateStringInRange.length !== 14) {
            return new Date(NaN);
        }

        if (dateStringInRange.length === 14) {
            date = new Date(
                dateStringInRange.substr(0, 4) | 0,
                (dateStringInRange.substr(4, 2) | 0) - 1,
                dateStringInRange.substr(6, 2) | 0,
                dateStringInRange.substr(8, 2) | 0,
                dateStringInRange.substr(10, 2) | 0,
                dateStringInRange.substr(12, 2) | 0,
            );

            if (!isNaN(date)) {
                return date;
            }
        }

        date = new Date(dateStringInRange);
        if (!isNaN(date)) {
            return date;
        }

        date = new Date(NaN);
        parts = isoExp.exec(dateStringInRange);
        if (parts) {
            month = +parts[2];
            date.setFullYear(parts[1] | 0, month - 1, parts[3] | 0);
            date.setHours(parts[4] | 0);
            date.setMinutes(parts[5] | 0);
            date.setSeconds(parts[6] | 0);
            if (month != date.getMonth() + 1) {
                date.setTime(NaN);
            }
            return date;
        }
        return date;
    },
};
