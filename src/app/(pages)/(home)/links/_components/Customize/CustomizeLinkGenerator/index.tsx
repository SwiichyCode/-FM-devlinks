import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Links } from "@/app/(pages)/(home)/links/_types/links.type";
import { options } from "./data";
import cleanString from "@/app/utils/cleanString";
import TextField from "@/app/components/TextField";
import Select from "@/app/components/Select";
import * as S from "./styles";

type Props = {
  index: number;
  id: string;
  links: Links[];
  updateLinkUrl: (index: number, url: string) => void;
  updateOption: (index: number, name: string) => void;
  deleteLink: (id: string) => void;
};

export default function LinkGenerator({
  index,
  id,
  links,
  updateLinkUrl,
  updateOption,
  deleteLink,
}: Props) {
  const { watch } = useFormContext();

  const availableOptions = options.filter(
    (option) => !links.some((link) => link.name === option.option)
  );

  const [selectedOption, setSelectedOption] = useState({
    option: links[index].name || availableOptions[0].option,
    icon: options[index].icon || availableOptions[0].icon,
  });

  useEffect(() => {
    updateOption(index, selectedOption.option);
  }, [index, updateOption, selectedOption]);

  useEffect(() => {
    const subscription = watch((value) => {
      updateLinkUrl(index, value[`platform_${id}`]);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <S.LinkGeneratorWrapper>
      <S.LinkGeneratorHeader>
        <S.LinkGeneratorIndex>Link #{index + 1}</S.LinkGeneratorIndex>
        <S.LinkGeneratorRemove type="button" onClick={() => deleteLink(id)}>
          Remove
        </S.LinkGeneratorRemove>
      </S.LinkGeneratorHeader>
      <S.LinkGeneratorInputWrapper>
        <Select
          labelText="Platform"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          optionsList={availableOptions}
        />
        <TextField
          labelText="Link"
          placeholder={`https://${cleanString(selectedOption.option)}.com`}
          iconSrc="/images/icon-link.svg"
          name={`platform_${id}`}
          defaultValue={links[index].url}
          rules={{
            required: "Can’t be empty",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Please enter a valid URL",
            },
          }}
        />
      </S.LinkGeneratorInputWrapper>
    </S.LinkGeneratorWrapper>
  );
}
