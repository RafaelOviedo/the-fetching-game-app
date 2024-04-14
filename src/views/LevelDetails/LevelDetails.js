import { useState } from 'react';
import style from './LevelDetails.module.css';
import LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown';
import ThemeDropdown from '../../components/ThemeDropdown/ThemeDropdown';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import { languageOptions } from "../../constants/languageOptions";
import { defineTheme } from "../../lib/defineTheme";

function LevelDetails() {
  const javascriptDefault = `// some comment`;
  const [code, setCode] = useState(javascriptDefault);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const onLanguageChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const onSelectChange = (language) => {
    setLanguage(language);
  };

  function handleThemeChange(th) {
    const theme = th;

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  return (
    <div className={style.levelDetailsContainer}>
      <div className={style.codeEditorContainer}>
        <div className={style.dropdownsContainer}>
          <LanguageDropdown onSelectChange={onSelectChange} />
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <CodeEditor onChange={onLanguageChange} code={code} language={language?.value} theme={theme.value} />
      </div>

      <div className={style.descriptionContainer}>
        Description Container
      </div>
    </div>
  )
}

export default LevelDetails;