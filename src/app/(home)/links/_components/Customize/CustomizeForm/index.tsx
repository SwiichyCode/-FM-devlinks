import { useEffect, useState, useTransition } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useFetchLinks from "@/app/(home)/_hooks/useFetchLinks";
import FormAction from "../../../_actions/FormAction";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";
import EmptyForm from "../CustomizeEmpty";
import LinkGenerator from "../CustomizeLinkGenerator";
import CustomizeAddLink from "../CustomizeAddLink";
import Notification from "@/app/(home)/_components/Notification";
import type { Links } from "@/app/(home)/_types/links.type";
import * as S from "./styles";

export default function CustomizeForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastLinkDeleted, setLastLinkDeleted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const { links, setLinks } = useUserProfile();
  const { data, isLoading } = useFetchLinks();
  const { user } = useFetchUser();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = async () => {
    if (links.length === 0) return;

    startTransition(() => {
      FormAction({
        formData: links as Links[],
        id: user.id,
      });
    });

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  useEffect(() => {
    if (data.links?.length) {
      setLinks(data.links);
    }
  }, [data]);

  useEffect(() => {
    if (links.length === 0 && lastLinkDeleted) {
      FormAction({
        formData: [],
        id: user.id,
      });
    }
  }, [links, lastLinkDeleted, user.id]);

  isLoading && <p>Loading...</p>;

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <CustomizeAddLink />

        {links.length > 0 ? (
          <S.LinksWrapper>
            {links.map(({ id }, index: number) => (
              <LinkGenerator
                key={index}
                index={index}
                id={id}
                setLastLinkDeleted={setLastLinkDeleted}
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
