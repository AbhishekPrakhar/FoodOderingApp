import React, { useEffect, useState } from "react";

const useGetAPI = (url, payload = null) => {
    const [receivedData, setReceivedData] = useState(null);

    const fetchData = async () => {
        const response = await fetch(url + payload)
        const data = await response.json()

        setReceivedData(data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return receivedData;
}

export default useGetAPI;