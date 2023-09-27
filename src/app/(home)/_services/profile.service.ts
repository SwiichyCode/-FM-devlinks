import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const updateProfile = async (data: any, id: string) => {
  const { error } = await supabase.from("user").update(data).eq("id", id);

  return { error };
};

const getProfile = async (id: string) => {
  const { data, error } = await supabase
    .from("user")
    .select(
      `
      id,
      username,
      firstname,
      lastname,
      email,
      links
    `
    )
    .eq("id", id);

  return { data, error };
};

const uploadProfilePicture = async (file: any) => {
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`public/${file.name}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return { data, error };
};

const ProfileService = {
  updateProfile,
  getProfile,
  uploadProfilePicture,
};

export default ProfileService;
