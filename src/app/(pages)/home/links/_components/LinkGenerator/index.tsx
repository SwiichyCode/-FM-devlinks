import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import cleanString from "@/app/utils/cleanString";
import TextField from "@/app/components/common/form/TextField";
import Select from "@/app/components/common/form/Select";
import { options } from "./data";
import * as S from "./styles";

type Props = {
  index: number;
  id: string;
  links: {
    name: string;
    url: string;
  }[];
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
  const [selectedOption, setSelectedOption] = useState({
    option: options[0].option,
    icon: options[0].icon,
  });

  const availableOptions = options.filter(
    (option) => !links.some((link) => link.name === option.option)
  );

  useEffect(() => {
    updateOption(index, selectedOption.option);
  }, [index, updateOption, selectedOption]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
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
        />
      </S.LinkGeneratorInputWrapper>
    </S.LinkGeneratorWrapper>
  );
}
