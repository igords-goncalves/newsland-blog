import axios from 'axios';

export default class HttpService {
    async get(url: string, params: object /*apiKey?: string*/) {
        return axios.get(url, {
            params,
            // headers: {
            //     'X-ACESS_KEY': apiKey,
            // },
        });
    }

    buildQueryString(values: string[]) {
        const entries = Object.entries(values);

        if (!entries.length) return '';

        const qryString =
            '?' + entries.map(([key, val]) => `${key}=${val}`).join('&');
        return qryString.length ? qryString : '';
    }
}
