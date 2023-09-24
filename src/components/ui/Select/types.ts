export type Props = {
  labelText: string;
  labelTheme?: "primary" | "secondary";
  withIcon?: boolean;
  selectedOption: {
    option: string;
    icon: string;
  };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{
      option: string;
      icon: string;
    }>
  >;
  optionsList: {
    option: string;
    icon: string;
  }[];
};
