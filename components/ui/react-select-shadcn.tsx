// Credit: https://gist.github.com/sayande2002/cfd39848edd55a2955b2a5efea99dc8e
// TODO: check advanced example at https://react-select.com/creatable to be able to create multiple options

"use client";

import clsx from "clsx";
import { ChevronDownIcon, X } from "lucide-react";
import Select, {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  OptionsOrGroups,
  components,
} from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <X />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <X />
    </components.MultiValueRemove>
  );
};

const controlStyles = {
  base: "border border-border rounded-lg bg-background hover:cursor-pointer hover:bg-secondary",
  focus: "border-border ring-ring ring-primary-500",
  nonFocus: "border-border",
};
const placeholderStyles = "text-muted-foreground text-sm ml-3";
const selectInputStyles = "text-foreground text-sm ml-3";
const valueContainerStyles = "text-foreground text-sm";
const singleValueStyles = "ml-3";
const multiValueStyles =
  "ml-3 bg-background border border-border rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md bg-background";
const indicatorsContainerStyles = "p-1 gap-1 bg-background rounded-lg";
const clearIndicatorStyles = "text-gray-500 p-1 rounded-md hover:text-red-800";
const indicatorSeparatorStyles = "bg-mutated";
const dropdownIndicatorStyles = "p-1 hover:text-foreground text-gray-500";
const menuStyles =
  "mt-2 p-2 border border-border bg-background text-sm rounded-lg";
const optionsStyle =
  "bg-background p-2 border-0 text-base hover:bg-secondary hover:cursor-pointer";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm bg-background";
const noOptionsMessageStyles = "text-muted-foreground bg-background";

type SelectComponentProps = {
  options:
    | OptionsOrGroups<
        { value: string; label: string },
        GroupBase<{ value: string; label: string }>
      >
    | undefined;
  value?: any;
  onChange?: (value: any) => void;
  isMulti?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  createAble: boolean;
  placeholder?: string;
};

export const ReactSelectShadcn = ({
  options,
  value,
  onChange,
  isMulti,
  isDisabled,
  isLoading,
  createAble,
  placeholder,
  ...props
}: SelectComponentProps) => {
  const animatedComponents = makeAnimated();
  const Comp = createAble ? CreatableSelect : Select;
  return (
    <>
      <Comp
        unstyled
        isClearable
        isSearchable
        value={value}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isLoading={isLoading}
        placeholder={placeholder}
        components={animatedComponents}
        // defaultInputValue={defaultValue}
        defaultValue={value}
        options={options}
        noOptionsMessage={() => "No options found."}
        onChange={onChange}
        classNames={{
          control: ({ isFocused }) =>
            clsx(
              isFocused ? controlStyles.focus : controlStyles.nonFocus,
              controlStyles.base
            ),
          placeholder: () => placeholderStyles,
          input: () => selectInputStyles,
          option: () => optionsStyle,
          menu: () => menuStyles,
          valueContainer: () => valueContainerStyles,
          singleValue: () => singleValueStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: () => multiValueRemoveStyles,
          indicatorsContainer: () => indicatorsContainerStyles,
          clearIndicator: () => clearIndicatorStyles,
          indicatorSeparator: () => indicatorSeparatorStyles,
          dropdownIndicator: () => dropdownIndicatorStyles,
          groupHeading: () => groupHeadingStyles,
          noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
      />
    </>
  );
};
