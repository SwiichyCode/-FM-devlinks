import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ProfileService from "@/app/(home)/_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useFetchProfile from "@/app/(home)/_hooks/useFetchProfile";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button/Button";
import EmptyForm from "../CustomizeEmpty";
import LinkGenerator from "../CustomizeLinkGenerator";
import CustomizeAddLink from "../CustomizeAddLink";
import Notification from "@/components/ui/Notification";
import * as S from "./styles";

export default function CustomizeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastLinkDeleted, setLastLinkDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [linksChanged, setLinksChanged] = useState(false);
  const { links } = useUserProfile();
  const { data, isLoading } = useFetchProfile({ isLinks: true });
  const { user } = useFetchUser();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = async () => {
    // if (links.length === 0 || !linksChanged) return;

    try {
      const { error } = await ProfileService.updateProfile({ links }, user.id);

      if (!error) {
        setFormSubmitted(true);
        setLinksChanged(false);
        setTimeout(() => setFormSubmitted(false), 3000);
      } else {
        throw error;
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (isLoading) return null;

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <CustomizeAddLink setLinksChanged={setLinksChanged} />

        {links.length ? (
          <>
            <S.LinksWrapper>
              {links.map(({ id }, index: number) => (
                <LinkGenerator
                  key={index}
                  index={index}
                  id={id}
                  setLastLinkDeleted={setLastLinkDeleted}
                  setLinksChanged={setLinksChanged}
                />
              ))}
            </S.LinksWrapper>
          </>
        ) : (
          <EmptyForm />
        )}

        <S.FormSave>
          <Button type="submit" disabled={!links.length || !linksChanged}>
            Save
          </Button>
        </S.FormSave>

        <Notification
          icon="/images/icon-changes-saved.svg"
          message={
            formSubmitted
              ? "Your changes have been succesfully saved!"
              : "Something went wrong!"
          }
          show={formSubmitted || error}
        />
      </S.FormWrapper>
    </FormProvider>
  );
}
