export const Utils = {
    delay: function (duration) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
        })
    },

    string: {
        zeropad(n, length) {
            return (Array(length + 1).join('0') + n).slice(-length)
        }
    },


    getQuery(key, fromCache = true) {

        if (!this._query || !fromCache) {
            this._query = {};

            //最初の?を除いた文字列を取得
            let query = window.location.search.substring(1);

            let parameters = query.split('&');

            for (let i = 0; i < parameters.length; i++) {

                let element = parameters[i].split("=");

                let paramName = decodeURIComponent(element[0]);
                let paramValue = decodeURIComponent(element[1]);

                this._query[paramName] = paramValue;
            }
        }

        return this._query[key];
    },
}