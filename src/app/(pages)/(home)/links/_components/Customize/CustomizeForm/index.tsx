import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useUserProfile } from "@/app/(pages)/(home)/_stores/useUserProfile";
import Button from "@/app/components/Button";
import EmptyForm from "../CustomizeEmpty";
import LinkGenerator from "../CustomizeLinkGenerator";
import CustomizeAddLink from "../CustomizeAddLink";
import * as S from "./styles";

export default function CustomizeForm() {
  const { links, generateLink, deleteLink, updateLink, updatePlatform } =
    useUserProfile();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    if (links.length === 0) return;

    console.log("links", links);
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <CustomizeAddLink links={links} generateLink={generateLink} />

        {links.length > 0 ? (
          <S.LinksWrapper>
            {links.map(({ id }, index) => (
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
            minContentWidth
          />
        </S.FormSave>
      </S.FormWrapper>
    </FormProvider>
  );
}
