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

    /**
     *
     * @function
     * @name : calcDate
     * @description : 주어진 날자를 기준으로 type만큼 가감된 날자를 format 형태로 반환
     * @param {Date|string} date 기준날자
     * @param {string} type -2d, -3d, 4M, 2y
     * @param {string} format
     * @return {Date|string} format 지정값에 따라 결과를 날자형 또는 문자열로 변환해서 반환
     */
    calcDate(date, type, format) {
        date = this.parse(date);
        if (!date) {
            return null;
        }

        let m = type.match(/([-+]*)([0-9]*)([a-z]+)/i);
        let g = m[1] === '-' ? '-1' : 1;
        let d = (m[2] | 0) * g;

        switch (m[3]) {
            case 'd':
                date.setDate(date.getDate() + d);
                break;
            case 'w':
                date.setDate(date.getDate() + d * 7);
                break;
            case 'M':
                date.setMonth(date.getMonth() + d);
                break;
            case 'y':
                date.setMonth(date.getFullYear() + d);
                break;
        }
        if (format) {
            return this.format(date, format === 'format' ? 'yyyy-MM-dd' : format);
        }
        return date;
    },

    /**
     *
     * @function
     * @name : monthDiff
     * @description : 두날자의 월 간격
     * @param {Date|string} date1 비교할 문자열1
     * @param {Date|string} date2 비교할 문자열2
     * @return {number} 두날자의 월차
     */
    monthDiff(date1, date2) {
        date1 = this.parse(date1);
        date2 = this.parse(date2);

        let months;
        months = (date2.getFullYear() - date1.getFullYear()) * 12;
        months -= date1.getMonth() + 1;
        months += date2.getMonth();
        return months;
    },

    /**
     *
     * @function
     * @name : dayInMonth
     * @description : 주어진 년월의 일수를 반환
     * @param {number|string} year 년도
     * @param {number|string} month 월
     * @return {number} 주어진 년월의 마지막 날자
     */
    dayInMonth(year, month) {
        let dd = new Date(year | 0, month | 0, 0);
        return dd.getDate();
    },

    /**
     *
     * @function
     * @name : splits
     * @description : 밀리초를 시,분,초로 변환
     * @param {number|string} amount 밀리초값
     * @return {Object} 변환된값
     * @return {number} days
     * @return {number} hours
     * @return {number} mins
     * @return {number} secs
     */
    splits(amount) {
        let days, hours, mins, secs;

        amount = amount / 1000;

        days = Math.floor(amount / 86400);
        amount = amount % 86400;

        hours = Math.floor(amount / 3600);
        amount = amount % 3600;

        mins = Math.floor(amount / 60);
        amount = amount % 60;

        secs = Math.floor(amount);
        return { days, hours, mins, secs };
    },
    /**
     *
     * @function
     * @name : diff
     * @description : 주어진 두 날자의 간격을 시, 분 , 초로 반환
     * @param {Date} t1 기준시간
     * @param {Date} t2 비교할시간
     * @return {Object} dates 시간차 값들이 들어있는 객체
     * @return {number} dates.ms 밀리초
     * @return {number} dates.secs 초
     * @return {number} dates.mins 분
     * @return {number} dates.hours 시
     * @return {number} dates.days 일
     * @return {number} dates.weeks 주
     * @return {number} dates.diff
     */
    diff(t1, t2) {
        if (!typeCheckUtil.isDate(t1)) {
            t1 = new Date(t1);
        }
        if (!typeCheckUtil.isDate(t2)) {
            t2 = new Date(t2);
        }

        let diff = t1.getTime() - t2.getTime();
        let ddiff = diff;

        diff = Math.abs(diff);
        let ms = diff % 1000;
        diff /= 1000;

        let s = Math.floor(diff % 60);
        diff /= 60;

        let m = Math.floor(diff % 60);
        diff /= 60;

        let h = Math.floor(diff % 24);
        diff /= 24;
        let d = Math.floor(diff);
        let w = Math.floor(diff / 7);
        return {
            ms,
            secs: s,
            mins: m,
            hours: h,
            days: d,
            weeks: w,
            diff: ddiff,
        };
    },

    /**
     *
     * @function
     * @name : isLeapYear
     * @description : 윤년인가 확인
     * @param {Date|number|string} y
     * @return {boolean}
     */
    isLeapYear(y) {
        if (toString.call(y) === '[object Date]') {
            y = y.getUTCFullYear();
        }

        return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    },

    /**
     *
     * @function
     * @name : add
     * @description : 날자가감 함수
     * @param {Date} date 날자
     * @param {string} interval 가감타입 (ms, s, m, h, d, M, y)
     * @param {number} value 가감 크기
     * @return {Date}
     */
    add(date, interval, value) {
        let d = new Date(date.getTime());
        if (!interval || value === 0) {
            return d;
        }

        switch (interval) {
            case 'ms':
                d.setMilliseconds(d.getMilliseconds() + value);
                break;
            case 's':
                d.setSeconds(d.getSeconds() + value);
                break;
            case 'm':
                d.setMinutes(d.getMinutes() + value);
                break;
            case 'h':
                d.setHours(d.getHours() + value);
                break;
            case 'd':
                d.setDate(d.getDate() + value);
                break;
            case 'M':
                d.setMonth(d.getMonth() + value);
                break;
            case 'y':
                d.setFullYear(d.getFullYear() + value);
                break;
        }
        return d;
    },

    /**
     *
     * @function
     * @name : max
     * @description : 주어진 두날자 중에서 큰값
     * @param {Date|string} date1 비교할 문자열1
     * @param {Date|string} date2 비교할 문자열2
     * @return {Date}
     */
    max(date1, date2) {
        return new Date(Math.max(this.parse(date1), this.parse(date2)));
    },

    /**
     *
     * @function
     * @name : min
     * @description : 주어진 두날자 중에서 작은값
     * @param {Date|string} date1 비교할 문자열1
     * @param {Date|string} date2 비교할 문자열2
     * @return {Date}
     */
    min(date1, date2) {
        return new Date(Math.min(this.parse(date1), this.parse(date2)));
    },

    /**
     *
     * @function
     * @name : normalize
     * @description : 시분초 normalize화 처리
     * @param {Date} h 시
     * @param {Date} M 분
     * @param {Date} s 초
     * @param {Date} ms 밀리초
     * @return {Object} dates 시간차 값들이 들어있는 객체
     * @return {number} dates.ms 밀리초
     * @return {number} dates.sec 초
     * @return {number} dates.min 분
     * @return {number} dates.hour 시
     * @return {number} dates.day 일
     */

    normalize: function (h, M, s, ms) {
        h = h || 0;
        M = M || 0;
        s = s || 0;
        ms = ms || 0;
        let d = 0;
        if (ms > 1000) {
            s += Math.floor(ms / 1000);
        }

        if (s > 60) {
            M += Math.floor(s / 60);
        }

        if (M > 60) {
            h += Math.floor(M / 60);
            M = M % 60;
        }

        if (h > 24) {
            d += Math.floor(h / 24);
            h = h % 24;
        }

        return {
            day: d,
            hour: h,
            min: M,
            sec: s,
            ms,
        };
    },
};
