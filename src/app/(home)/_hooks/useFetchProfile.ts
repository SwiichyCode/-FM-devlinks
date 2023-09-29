import { useEffect, useState } from "react";
import ProfileService from "../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";

export default function useFetchProfile() {
  const { user } = useFetchUser();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await ProfileService.getProfile(user.id);
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

    fetchProfile();
  }, []);

  return { data, isLoading };
}
