import { useEffect, useState } from "react";
import ProfileService from "../_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";

type Props = {
  id?: string | null;
  isLinks?: boolean;
};

export default function useFetchProfile({ id, isLinks }: Props = {}) {
  const { user } = useFetchUser();
  const { setLinks, setProfile } = useUserProfile();
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

          isLinks && setLinks(data[0].links);
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
