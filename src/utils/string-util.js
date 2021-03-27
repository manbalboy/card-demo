import typeCheckUtil from './type-check-util';

export default {
    /**
     *
     * @function
     * @name rpad
     * @description : 숫자 옆에 원하는 길이만큼 char 을 이어준다. 기준 문자열이 반환 길이보다 크면 문자열 그대로 리턴
     * @param {string} string : 오른쪽에 붙일 기준점이 되는 문자열
     * @param {string|number} length : 반환할 length
     * @param {string} char : 붙일 문자열
     * @return {string}
     * @example
     * rpad('Abc',8,'*')
     */
    rpad(string, length, char) {
        char = char || ' ';
        if (length <= string.length) return string;
        return string + new Array(length - string.length + 1).join(char);
    },

    /**
     *
     * @function
     * @name lpad
     * @description : 숫자 옆에 원하는 길이만큼 char 을 이어준다. 기준 문자열이 반환 길이보다 크면 문자열 그대로 리턴
     * @param {string} string : 왼쪽에 붙일 기준점이 되는 문자열
     * @param {string|number} length : 반환할 length
     * @param {string} char : 붙일 문자열
     * @return {string}
     * @example
     * lpad('Abc',8,'*')
     */
    lpad(string, length, char) {
        char = char || ' ';
        if (length <= string.length) {
            return string;
        }
        return new Array(length - string.length + 1).join(char) + string;
    },

    /**
     *
     * @function
     * @name padString
     * @description :
     * 숫자 옆에 원하는 길이만큼 char 을 이어준다.
     * 기준 문자열이 반환 길이보다 크면 문자열 잘라서 리턴 리턴
     * @param {string} str : 기준점이 되는 문자열
     * @param {string|number} length : 반환할 length
     * @param {string} padStr : 채워 넣을 문자열
     * @param {number} isTail : 채워넣을 문자열을 뒤에 붙일 것인지에 대한 여부
     * @return {string}
     * @example
     * padString('Abc',8,'*', true)
     */
    padString(str, length, padStr, isTail) {
        var i;
        let paddings = '';
        let strLength;

        if (typeCheckUtil.isEmpty(padStr) || !typeCheckUtil.isString(padStr)) {
            padStr = ' ';
        } else if (padStr.length > 1) {
            padStr = padStr.substr(0, 1);
        }

        if (typeCheckUtil.isNumber(str)) {
            str = '' + str;
        }

        strLength = str.length;

        if (strLength == length) {
            return str;
        } else if (strLength < length) {
            for (i = 0; i < length - strLength; i++) {
                paddings = paddings + padStr;
            }

            return isTail === true ? str + paddings : paddings + str;
        } else {
            return str.substr(0, length);
        }
    },

    /**
     *
     * @function
     * @name reverse
     * @description : String d을 리버스 시킨다.
     * @param {string} value
     * @return {string}
     * @example
     * reverse('Abc')
     */
    reverse(value) {
        let o = '';
        let i;
        let len = value.length;
        for (i = len - 1; i >= 0; i--) {
            o += value[i];
        }
        return o;
    },
};
