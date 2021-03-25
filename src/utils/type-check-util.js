export default {
    isString(value) {
        return typeof value === 'string';
    },
    isBoolean(value) {
        return typeof value === 'boolean';
    },
    isObject(value) {
        return typeof value === 'object';
    },
    isArray(value) {
        return Array.isArray(value);
    },
    isUndefined(value) {
        return typeof value === 'undefined';
    },
    isNumber(value) {
        return typeof value === 'number';
    },
    isFunction(value) {
        return typeof value === 'function';
    },
    isDate(value) {
        return value instanceof Date;
    },
    isNull(value) {
        return value === null;
    },
    isEmpty(value) {
        if (value === null) {
            return true;
        }
        if (typeof value === 'undefined') {
            return true;
        }
        if (typeof value === 'string' && value === '') {
            return true;
        }
        if (Array.isArray(value) && value.length < 1) {
            return true;
        }
        if (
            typeof value === 'object' &&
            value.constructor.name === 'Object' &&
            Object.keys(value).length < 1 &&
            Object.getOwnPropertyNames(value) < 1
        ) {
            return true;
        }
        if (
            typeof value === 'object' &&
            value.constructor.name === 'String' &&
            Object.keys(value).length < 1
        ) {
            return true;
        } // new String()
        return false;
    },
};
