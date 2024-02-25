"use client";
import $http from "@/utils/request";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectPage() {
  const [error, setError] = useState<any>(null);
  const [url, setURL] = useState<string | null>(null);
  const query = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const id = params.id;

  const handleCheckURL = async () => {
    try {
      const res = await $http.get(`${id}/redirect`, {
        params: {
          pass: query.get("p"),
        },
      });
      if (res.data.error || !res.data.url) {
        setError(res.data.error);
        return;
      }
      // window.location.href = res.data;
      setURL(res.data.url);
    } catch (err: any) {
      console.error(err);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCheckURL();
  }, []);

  if (url) return redirect(url);
  return (
    <div className="flex items-center justify-center font-bold uppercase text-white w-full h-screen bg-[#141A23]">
      {loading ? (
        "loading..."
      ) : (
        <span className="text-red-300">{error || "unknown error"}</span>
      )}
    </div>
  );
}
