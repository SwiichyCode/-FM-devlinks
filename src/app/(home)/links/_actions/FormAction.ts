"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { Links } from "@/app/(home)/_types/links.type";

type Props = {
  formData: Links[];
  id: string;
};

export default async function FormAction({ formData, id }: Props) {
  const supabase = createServerActionClient({ cookies });

  const { data, error } = await supabase
    .from("user")
    .update({
      links: formData,
    })
    .eq("id", id);

  if (error) {
    console.log(error);
    return error;
  }

  if (data) {
    console.log(data);
  }

  return data;
}
