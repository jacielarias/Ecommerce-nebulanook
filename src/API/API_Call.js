import { useState, useEffect } from 'react';

export function useAPI(url, errorMsj) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error(errorMsj, error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, errorMsj]);

    return { data, loading, error };
}
