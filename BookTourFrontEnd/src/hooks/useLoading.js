import { useEffect } from "react";
import { useState } from "react";

export default function useLoading(initialize = true) {
  const [loading, setLoading] = useState(initialize);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  return loading
}
