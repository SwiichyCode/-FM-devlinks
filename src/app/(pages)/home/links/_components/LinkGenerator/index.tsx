import React, { useState } from "react";
import TextField from "@/app/components/common/form/TextField";
import * as S from "./styles";
import { useCustomizeStore } from "@/app/(pages)/home/links/_stores/customize";

type Props = {
  index: number;
  id: string;
  updateLinkUrl: (index: number, url: string) => void; // Appeler updateLinkUrl lorsqu'une nouvelle url est entrée (dans le TextField
  handleOptionChange: (index: number, name: string) => void;
  deleteLink: (id: string) => void;
};

export default function LinkGenerator({
  index,
  id,
  updateLinkUrl,
  handleOptionChange,
  deleteLink,
}: Props) {
  const [selectedOption, setSelectedOption] = useState("facebook");
  const link = useCustomizeStore((state) => state.links[index]);

  return (
    <S.LinkGeneratorWrapper>
      <S.LinkGeneratorHeader>
        <S.LinkGeneratorIndex>Link #{index + 1}</S.LinkGeneratorIndex>
        <S.LinkGeneratorRemove type="button" onClick={() => deleteLink(id)}>
          Remove
        </S.LinkGeneratorRemove>
      </S.LinkGeneratorHeader>
      <S.LinkGeneratorInputWrapper>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            handleOptionChange(index, e.target.value);
          }}
        >
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
          <option value="github">Github</option>
        </select>
        <TextField
          labelText="Link"
          placeholder="https://your-link.com"
          name="url"
          value={link.url}
          onChange={(e) => updateLinkUrl(index, e.target.value)}
          useRegister={false}
        />
      </S.LinkGeneratorInputWrapper>
    </S.LinkGeneratorWrapper>
  );
}
