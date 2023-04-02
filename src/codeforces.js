import axios from 'axios';


const CODEFORCES_API_BASE_URL = "https://codeforces.com/api/";

export async function fetchRecentSubmissions(count) {
    const url = `${CODEFORCES_API_BASE_URL}problemset.recentStatus?count=${count}`;

    try {
        const response = await axios.get(url);
        return response.data.result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
