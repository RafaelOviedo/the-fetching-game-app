import Select from "react-select";
import style from './LanguageDropdown.module.css';
import { languageOptions } from "../../constants/languageOptions";

function LanguagesDropdown({ onSelectChange }) {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      className={style.reactSelect}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;