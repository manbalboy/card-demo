import commonUtil from './common-util';
import typeCheckUtil from './type-check-util';

export default {
    /**
     *
     * @function
     * @name : parse
     * @description : 주어진 날자형식의 문자열을 Date객체로 변환
     * @param {string} dateStringInRange 날자형식의 문자열
     * @return {Date}
     */
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

    /**
     *
     * @function
     * @name : format
     * @description :
     * //날자형식을 지정한 포맷의 문자열로 변환
     * //yyyy : 2021
     * //yy : 21
     * //M : 4
     * // MM : 04
     * // MMM : Apr
     * // MMMM : April
     * // d : 7
     * // dd : 07
     * // h : 15
     * // hh : 15
     * // H : 3
     * // m : 3
     * // mm : 03
     * // s : 45
     * // ss :45
     * // x : PM
     * @param {Date|string} formatDate
     * @param {string} formatString 포맷 문자열
     * @return {string} 변환된 문자열
     */

    format(formatDate, formatString = 'yyyy.MM.dd') {
        if (formatDate === '' || formatDate === null) {
            return '';
        }
        if (typeCheckUtil.isNumber(formatDate)) {
            formatDate = new Date(formatDate);
        } else if (typeCheckUtil.isString(formatDate)) {
            formatDate = this.parse(formatDate);
        }

        if (typeCheckUtil.isDate(formatDate)) {
            let yyyy = formatDate.getFullYear();
            let yy = yyyy.toString().substring(2);
            let M = formatDate.getMonth() + 1;
            let MM = M < 10 ? '0' + M : M;
            let d = formatDate.getDate();
            let dd = d < 10 ? '0' + d : d;
            let h = formatDate.getHours();
            let hh = h < 10 ? '0' + h : h;
            let m = formatDate.getMinutes();
            let mm = m < 10 ? '0' + m : m;
            let s = formatDate.getSeconds();
            let ss = s < 10 ? '0' + s : s;
            let x = h > 11 ? 'PM' : 'AM';
            let H = h % 12;
            if (H === 0) {
                H = 12;
            }

            return formatString
                .replace(/yyyy/g, yyyy)
                .replace(/yy/g, yy)
                .replace(/MM/g, MM)
                .replace(/M/g, M)
                .replace(/dd/g, dd)
                .replace(/d/g, d)
                .replace(/hh/g, hh)
                .replace(/h/g, h)
                .replace(/mm/g, mm)
                .replace(/m/g, m)
                .replace(/ss/g, ss)
                .replace(/s/g, s)
                .replace(/H/g, H)
                .replace(/x/g, x);
        } else {
            return '';
        }
    },
    /**
     *
     * @function
     * @name : isValid
     * @description : 주어진 날자형식이 유효한지 체크
     * @param {string} date 날자 문자열
     * @return {boolean}
     */
    isValid(date) {
        try {
            return !isNaN(this.parse(date).getTime());
        } catch (e) {
            return false;
        }
    },

    /**
     *
     * @function
     * @name : between
     * @description : 주어진 날자가 두날자 사이에 있는 지 여부
     * @param {Date|string} date 날자 문자열
     * @param {Date|string} start 시작 날자 문자열
     * @param {Date|string} end 끝 날자 문자열
     * @return {boolean}
     */
    between(date, start, end) {
        if (!date.getDate) {
            date = this.parse(date);
        }
        if (!start.getDate) {
            start = this.parse(start);
        }
        if (!end.getDate) {
            end = this.parse(end);
        }

        return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
    },

    /**
     *
     * @function
     * @name : compare
     * @description : 날자비교
     * @param {Date|string} date1 비교할 문자열1
     * @param {Date|string} date2 비교할 문자열2
     * @return {number} -1 : date1가 이후 , 0 : 동일 , 1: date2가 이후
     */
    compare(date1, date2) {
        if (!typeCheckUtil.isDate(date1)) {
            date1 = this.parse(date1);
        }
        if (!typeCheckUtil.isDate(date2)) {
            date2 = this.parse(date2);
        }

        return date1.getTime() > date2.getTime() ? -1 : date1.getTime() === date2.getTime() ? 0 : 1;
    },

    /**
     *
     * @function
     * @name : equalsYMD
     * @description : 년월일 비교
     * @param {Date|string} date1 비교할 문자열1
     * @param {Date|string} date2 비교할 문자열2
     * @return {boolean} 두날자의 년월이 동일한지 여부
     */
    equalsYMD(date1, date2) {
        let ret = true;

        if (!date1 || !date2) {
            return false;
        }

        if (!typeCheckUtil.isDate(date1)) {
            date1 = this.parse(date1);
        }
        if (!typeCheckUtil.isDate(date2)) {
            date2 = this.parse(date2);
        }
        ['getFullYear', 'getMonth', 'getDate'].forEach(fn => {
            ret = ret && date1[fn]() === date2[fn]();
            if (!ret) {
                return false;
            }
        });

        return ret;
    },
};
