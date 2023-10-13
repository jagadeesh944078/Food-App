import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;
