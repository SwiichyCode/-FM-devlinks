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
    const fetchLinks = async () => {
      setIsLoading(true); // Set loading to true when starting the fetch
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
      } finally {
        setIsLoading(false); // Set loading to false regardless of success or error
      }
    };

    if (links.length === 0) {
      fetchLinks();
    }
  }, [links]);

  return { data, isLoading };
}
