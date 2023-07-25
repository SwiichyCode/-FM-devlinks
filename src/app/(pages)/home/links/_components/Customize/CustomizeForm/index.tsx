import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useCustomizeStore } from "../../../_stores/customize";
import uuid from "@/app/utils/uuid";
import Button from "@/app/components/common/button/Button";
import EmptyForm from "./EmptyForm";
import LinkGenerator from "../../LinkGenerator";
import * as S from "./styles";

export default function CustomizeForm() {
  const { links, addLink, updateLinkUrl, handleOptionChange, deleteLink } =
    useCustomizeStore();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    console.log(links);
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <Button
          type="button"
          text="+ Add new link"
          theme="secondary"
          onClick={() => addLink({ id: uuid(), name: "", url: "" })}
        />
        {links.length > 0 ? (
          <S.LinksWrapper>
            {links.map(({ id }, index) => (
              <LinkGenerator
                key={index}
                index={index}
                id={id}
                updateLinkUrl={updateLinkUrl}
                deleteLink={deleteLink}
                handleOptionChange={(index, name) => {
                  handleOptionChange(index, name);
                }}
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
            disabled={!links}
            minContentWidth
          />
        </S.CustomizeSave>
      </S.FormWrapper>
    </FormProvider>
  );
}
