import Pusher from "pusher-js";
import { useEffect, useState } from "react";

const usePartNotification = () => {

  const [data, setData] = useState({});

  let pusher = new Pusher("bb224b7679e421b08b37", {
    cluster: "eu",
  });

  const partsStockNotification = pusher.subscribe("parts-stock");

  useEffect(() => {

    
  partsStockNotification.bind("parts-stock-notification", function (data) {
    setData(data);
  });

    return () => {
      partsStockNotification.unbind("parts-stock-notification");
    };
  }, [partsStockNotification]);

  return data;
};

export default usePartNotification;
