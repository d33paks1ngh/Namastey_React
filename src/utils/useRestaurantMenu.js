import { MENU_API } from "./Constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resdata, setresdata] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresdata(json?.data);
  };

  return resdata;
};

export default useRestaurantMenu;
