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
}
