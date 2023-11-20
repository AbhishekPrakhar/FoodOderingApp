import { useEffect, useState } from "react"


const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.onoffline = (event) => {
            // console.log('offline')
            setIsOnline(false)
        };

        window.ononline = (event) => {
            // console.log('offline')
            setIsOnline(true)
        };
    }, [isOnline])

   return isOnline;

}

export default useOnlineStatus;