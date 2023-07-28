"use client";
import CustomizeForm from "./CustomizeForm";
import FormLayout from "../../../_layouts/FormLayout";

export default function Customize() {
  return (
    <FormLayout
      title="Customize your links"
      subtitle="Add/edit/remove links below and then share all your profiles with the
    world!"
    >
      <CustomizeForm />
    </FormLayout>
  );
}
