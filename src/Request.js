const baseUrl = 'https://localhost:7265/Search/search?srchtxt=';

export const getRequest = async (searchValue, params = {}) => {
    if(!searchValue){
      return undefined
    }
    try {
          const response = await fetch(`${baseUrl}${searchValue}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // You can pass query parameters here if needed
        });
        const data = await handleResponse(response);
        return data;
    } catch (error) {
        throw error;
    }
};

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
};
