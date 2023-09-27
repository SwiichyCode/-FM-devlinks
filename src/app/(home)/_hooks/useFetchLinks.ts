import { useEffect, useState } from "react";
import ProfileService from "../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useUserProfile from "../_stores/useUserProfile";

export default function useFetchLinks() {
  const { user } = useFetchUser();
  const { links } = useUserProfile();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (links.length) return;

    const fetchLinks = async () => {
      try {
        const { data, error } = await ProfileService.getLinks(user.id);
        if (data) {
          setData(data[0]);
        }

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLinks();
  }, [links]);

  return { data, isLoading };
}
