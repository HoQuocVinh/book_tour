import { useEffect, useState } from "react";
import axios from "~/api/axios";

export function useGetTourById(id) {
  const [tourDetail, setTourDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(async () => {
      await axios.get(`tour/${id}`).then((response) => {
        setTourDetail(response.data.tourDetail);
      });
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    tourDetail,
    loading,
  };
}
