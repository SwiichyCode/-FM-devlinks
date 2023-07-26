import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useCustomizeStore } from "../../../_stores/customize";
import uuid from "@/app/utils/uuid";
import Button from "@/app/components/common/button/Button";
import EmptyForm from "../EmptyForm";
import LinkGenerator from "../../LinkGenerator";
import * as S from "./styles";

export default function CustomizeForm() {
  const { links, addLink, updateLinkUrl, updateOption, deleteLink } =
    useCustomizeStore();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    if (links.length === 0) return;

    console.log("links", links);
    console.log(data);
  };

  const handleAddLink = () => {
    addLink({ id: uuid(), name: "", url: "" });
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <Button
          type="button"
          text="+ Add new link"
          theme="secondary"
          onClick={links.length! < 5 ? handleAddLink : () => {}}
          disabled={links.length! < 5 ? false : true}
        />
        {links.length > 0 ? (
          <S.LinksWrapper>
            {links.map(({ id }, index) => (
              <LinkGenerator
                key={index}
                index={index}
                id={id}
                links={links}
                updateLinkUrl={updateLinkUrl}
                updateOption={updateOption}
                deleteLink={deleteLink}
              />
            ))}
          </S.LinksWrapper>
        ) : (
          <EmptyForm />
        )}

        <S.CustomizeSave>
          <Button
            type="submit"
            text="Save"
            theme="primary"
            disabled={links.length ? false : true}
            minContentWidth
          />
        </S.CustomizeSave>
      </S.FormWrapper>
    </FormProvider>
  );
}
