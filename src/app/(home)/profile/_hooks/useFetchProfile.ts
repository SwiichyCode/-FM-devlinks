import { useEffect, useState } from "react";
import ProfileService from "../../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";

export default function useFetchProfile() {
  const { user } = useFetchUser();
  const [profile, setProfile] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProfile = async () => {
      try {
        const { data, error } = await ProfileService.getProfile(user.id);
        if (data) {
          // Type this
          setProfile(data[0]);
        }

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return { profile, isLoading };
}
