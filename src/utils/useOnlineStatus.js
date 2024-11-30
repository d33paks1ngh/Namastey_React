import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setonlineStatus(true);
    });
    window.addEventListener("offline", (event) => {
      setonlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
