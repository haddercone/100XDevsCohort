import { useEffect, useState } from "react";

export function useIsOnline() {
    const [online, setOnline] = useState(true);
  
    useEffect(() => {
      const onlineHandler = () => {
        console.log("Online");
        setOnline(true);
      };
  
      const offlineHandler = () => {
        console.log("Offline");
        setOnline(false);
      };
  
      window.addEventListener("online", onlineHandler);
      window.addEventListener("offline", offlineHandler);
  
      return () => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      };
    }, []);
  
    return online;
  }