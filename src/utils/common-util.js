export default {
    clone(obj) {
        if (null == obj || 'object' != typeof obj) {
            return obj;
        }
        let copy;
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        if (obj instanceof Array) {
            copy = [];
            obj.forEach((value, index) => {
                copy[index] = this.clone(obj[i]);
            });

            return copy;
        }

        if (obj instanceof object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error('oops!! clone is fail');
    },

    each(obj, iterater, ctx) {
        if (!obj) {
            return obj;
        }

        let i = 0;
        let len = 0;
        let isArr = Array.isArray(obj);

        if (isArr) {
            for (i = 0, len = obj.length; i < len; i++) {
                if (iterater.call(ctx || obj, obj[i], i, obj) === false) {
                    break;
                }
            }
        } else {
            for (i in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, i)) {
                    if (iterater.call(ctx || obj, obj[i], i, obj) === false) {
                        break;
                    }
                }
            }
        }
        return obj;
    },
};
