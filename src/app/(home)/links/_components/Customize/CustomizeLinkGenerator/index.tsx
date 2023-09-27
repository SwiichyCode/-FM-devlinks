import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import { options } from "./data";
import cleanString from "@/utils/cleanString";
import TextField from "@/components/ui/TextField";
import Select from "@/components/ui/Select";
import * as S from "./styles";

type Props = {
  index: number;
  id: string;
  setLastLinkDeleted: (value: boolean) => void;
};

export default function LinkGenerator({
  index,
  id,
  setLastLinkDeleted,
}: Props) {
  const { watch } = useFormContext();
  const { links, updateLink, updatePlatform, deleteLink } = useUserProfile();

  const availableOptions = options.filter(
    (option) => !links.some((link) => link.platform === option.option)
  );

  const [selectedOption, setSelectedOption] = useState({
    option: links[index].platform || availableOptions[0].option,
    icon: options[index].icon || availableOptions[0].icon,
  });

  useEffect(() => {
    updatePlatform(index, selectedOption.option);
  }, [index, updatePlatform, selectedOption]);

  useEffect(() => {
    const subscription = watch((value) => {
      updateLink(index, value[`platform_${id}`]);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const handleDeleteLink = (id: string) => {
    deleteLink(id);
    setLastLinkDeleted(true);
  };

  return (
    <S.LinkGeneratorWrapper>
      <S.LinkGeneratorHeader>
        <S.LinkGeneratorIndex>Link #{index + 1}</S.LinkGeneratorIndex>
        <S.LinkGeneratorRemove
          type="button"
          onClick={() => handleDeleteLink(id)}
        >
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
