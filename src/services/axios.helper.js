import axios from 'axios';

const cancelConfig = {
    request: null,
    cancelToken: null
};

async function axiosGetCancellable(url, config) {
    if (cancelConfig.request) {
        cancelConfig.request.cancel('cancelled');
    }

    cancelConfig.request = axios.CancelToken.source();
    cancelConfig.cancelToken = cancelConfig.request.token;
    Object.assign(cancelConfig, config);

    try {
        const res = await axios.get(url, cancelConfig);
        return res;
    } catch (error) {
        if (error.response !== undefined && error.response.status === 401) {
            alert("You have exceeded the API limit. Please try after some time (> 1 minute)");
            window.location.reload();
        }
        if (error.message !== 'cancelled') {
            throw error;
        }
    }
}

export { axiosGetCancellable };