import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";
import EmptyForm from "../CustomizeEmpty";
import LinkGenerator from "../CustomizeLinkGenerator";
import CustomizeAddLink from "../CustomizeAddLink";
import Notification from "@/app/(home)/_components/Notification";
import * as S from "./styles";

export default function CustomizeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { links, generateLink, deleteLink, updateLink, updatePlatform } =
    useUserProfile();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    if (links.length === 0) return;

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <CustomizeAddLink links={links} generateLink={generateLink} />

        {links.length > 0 ? (
          <S.LinksWrapper>
            {links.map(({ id }, index: number) => (
              <LinkGenerator
                key={index}
                index={index}
                id={id}
                links={links}
                updateLink={updateLink}
                updatePlatform={updatePlatform}
                deleteLink={deleteLink}
              />
            ))}
          </S.LinksWrapper>
        ) : (
          <EmptyForm />
        )}

        <S.FormSave>
          <Button
            type="submit"
            text="Save"
            theme="primary"
            disabled={links.length ? false : true}
            maxContentWidth
          />
        </S.FormSave>

        {formSubmitted && (
          <Notification
            icon="/images/icon-changes-saved.svg"
            message="Your changes have been succesfully saved!"
          />
        )}
      </S.FormWrapper>
    </FormProvider>
  );
}
