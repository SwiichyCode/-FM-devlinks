"use client";
import FormLayout from "../../../_layouts/FormLayout";
import ProfileForm from "./ProfileForm";

export default function Profile_() {
  return (
    <FormLayout
      title="Profile Details"
      subtitle="Add your details to create a personal touch to your profile."
    >
      <ProfileForm />
    </FormLayout>
  );
}
