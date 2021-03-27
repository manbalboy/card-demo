import commonUtil from './common-util';
import typeCheckUtil from './type-check-util';

export default {
    /**
     *
     * @function
     * @name : addParam
     * @description : 주어진 url에 object쿼리스트링을 조합
     * @param {string} url url
     * @param {Object|string} string
     * @return {string} 결과 문자열
     */
    addParam(url, string) {
        if (typeCheckUtil.isObject(string)) {
            string = this.toQueryString(string);
        }
        if (!typeCheckUtil.isEmpty(string)) {
            return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
        }
        return url;
    },

    /**
     *
     * @function
     * @name : toQueryString
     * @description : 객체를 쿼리 스트링으로 변환
     * @param {Object} params json 객체
     * @param {boolean} isEncode 인코딩여부
     * @return {string} 결과 문자열
     */
    toQueryString(params, isEncode) {
        if (typeof params === 'string') {
            return params;
        }
        let queryString = '';
        let encode =
            isEncode === false
                ? function (v) {
                      return v;
                  }
                : encodeURIComponent;
        commonUtil.each(params, function (value, key) {
            if (typeof value === 'object') {
                commonUtil.each(value, function (innerValue, innerKey) {
                    if (queryString !== '') {
                        queryString += '&';
                    }
                    queryString += encode(key) + '[' + encode(innerKey) + ']=' + encode(innerValue);
                });
            } else if (typeof value !== 'undefined') {
                if (queryString !== '') {
                    queryString += '&';
                }
                queryString += encode(key) + '=' + encode(value);
            }
        });
        return queryString;
    },
};
