import commonUtil from './common-util';
import typeCheckUtil from './type-check-util';

export default {
    addParam(url, string) {
        if (typeCheckUtil.isObject(string)) {
            string = this.toQueryString(string);
        }
        if (!typeCheckUtil.isEmpty(string)) {
            return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
        }
        return url;
    },

    toQueryString: function (params, isEncode) {
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
