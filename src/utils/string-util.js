export default {
    rpad(string, length, c) {
        c = c || ' ';
        if (length <= string.length) return string;
        return string + new Array(length - string.length + 1).join(c);
    },
    lpad(string, length, c) {
        c = c || ' ';
        if (length <= string.length) return string;
        return new Array(length - string.length + 1).join(c) + string;
    },
};
