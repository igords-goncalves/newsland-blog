import HttpService from './HttpService';

export default class NewsDataService extends HttpService {
    private baseUrl?: string;
    private apiKey?: string;

    constructor() {
        super();
        this.apiKey = process.env.API_KEY;
        this.baseUrl = process.env.API_URL;
    }

    get(endpoint: string, params: object) {
        const url = [this.baseUrl, endpoint].join('');
        const allParams = {
            ...params,
            apikey: this.apiKey,
            country: 'br',
            language: 'pt',
        };
        return super.get(url, allParams);
    }

    getLatestNews() {
        const endpoint = '/latest';
        const params = {};
        return this.get(endpoint, params);
    }
}
