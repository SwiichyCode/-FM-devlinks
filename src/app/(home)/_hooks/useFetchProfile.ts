import { useEffect, useState } from "react";
import ProfileService from "../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";

type Props = {
  id?: string | null;
};

export default function useFetchProfile({ id }: Props = {}) {
  const { user } = useFetchUser();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = id ? id : user.id;

        if (!userId) {
          console.error("No user id provided.");
        }

        const { data, error } = await ProfileService.getProfile(userId);
        if (data) {
          setData(data[0]);
        }

        if (error) {
          throw error;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { data, isLoading };
}
