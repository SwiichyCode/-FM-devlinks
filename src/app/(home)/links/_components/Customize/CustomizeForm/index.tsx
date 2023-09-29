import { useEffect, useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ProfileService from "@/app/(home)/_services/profile.service";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useFetchProfile from "@/app/(home)/_hooks/useFetchProfile";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";
import EmptyForm from "../CustomizeEmpty";
import LinkGenerator from "../CustomizeLinkGenerator";
import CustomizeAddLink from "../CustomizeAddLink";
import Notification from "@/app/(home)/_components/Notification";
import * as S from "./styles";

export default function CustomizeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastLinkDeleted, setLastLinkDeleted] = useState(false);
  const [error, setError] = useState(false);
  // Refer to docs.MD for more info about this state
  const [linksChanged, setLinksChanged] = useState(false);
  const { links, setLinks } = useUserProfile();
  const { data, isLoading } = useFetchProfile();
  const { user } = useFetchUser();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = async () => {
    if (links.length === 0 || !linksChanged) return;

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

  useEffect(() => {
    if (data.links?.length && !lastLinkDeleted) {
      setLinks(data.links);
    }
  }, [data, error]);

  useEffect(() => {
    if (links.length === 0 && data.links?.length > 0 && lastLinkDeleted) {
      const updateForm = async () => {
        await ProfileService.updateProfile({ links: [] }, user.id);
      };

      updateForm();
    }
  }, [links, lastLinkDeleted]);

  if (isLoading) return null;

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <CustomizeAddLink setLinksChanged={setLinksChanged} />

        {links.length > 0 ? (
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
          <Button
            type="submit"
            text="Save"
            theme="primary"
            disabled={links.length === 0 || !linksChanged}
            maxContentWidth
          />
        </S.FormSave>

        {(formSubmitted || error) && (
          <Notification
            icon="/images/icon-changes-saved.svg"
            message={
              formSubmitted
                ? "Your changes have been succesfully saved!"
                : "Something went wrong!"
            }
          />
        )}
      </S.FormWrapper>
    </FormProvider>
  );
}
