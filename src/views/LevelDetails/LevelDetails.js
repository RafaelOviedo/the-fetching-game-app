import { useEffect, useState } from 'react';
import style from './LevelDetails.module.css';
import LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown';
import ThemeDropdown from '../../components/ThemeDropdown/ThemeDropdown';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import CodeOutputWindow from '../../components/CodeOutputWindow/CodeOutputWindow';
import OutputDetails from '../../components/OutputDetails/OutputDetails';
import CustomInput from '../../components/CustomInput/CustomInput';
import { languageOptions } from "../../constants/languageOptions";
import { defineTheme } from "../../lib/defineTheme";
import axios from 'axios';

axios.defaults.baseURL = undefined;

function LevelDetails() {
  const javascriptDefault = `// some comment`;
  const [code, setCode] = useState(javascriptDefault);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);

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

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setProcessing(false)
        setOutputDetails(response.data)
        // showSuccessToast(`Compiled Successfully!`)
        console.log('response.data', response.data)
        return
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      // showErrorToast();
    }
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

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
        <CodeOutputWindow outputDetails={outputDetails} />

        <CustomInput
          customInput={customInput}
          setCustomInput={setCustomInput}
        />
        <button
          onClick={handleCompile}
          disabled={!code}
        >
          {processing ? "Processing..." : "Compile and Execute"}
        </button>

        {outputDetails && <OutputDetails outputDetails={outputDetails} />}
      </div>
    </div>
  )
}

export default LevelDetails;