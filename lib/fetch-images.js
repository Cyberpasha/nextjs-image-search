const baseUrl = 'https://api.pexels.com/v1';
const maxImages = 18;

const fetchAPI = (url) => {
    return fetch(url, {
        headers: {
            'Authorization': process.env.AUTH_TOKEN
        }
    }).then((res) => {
        return res.json();
    })
}

export function getInitialImages() {
    return fetchAPI(`${baseUrl}/curated?per_page=${maxImages}`);
}

export function getSearchResults(queryString) {
    return fetchAPI(`${baseUrl}/search?query=${queryString}&per_page=${maxImages}`);
}

export function getImage(imageId) {
    return fetchAPI(`${baseUrl}/photos/${imageId}`);
}