import React, { useState, useRef, useEffect } from "react";
import { View, Alert, Keyboard } from "react-native";
import TextInputView from "./TextinputView/TextInputView";

/**
 * @componentname OTPVerificationsCodes
 * @prop {Object} ViewWrapperStyle The ViewWrapperStyle is surrounding on the Input
 * @prop {Object} codeInputStyle The codeInputStyle is input style
 * @prop {String} focusedBordercolor The focusedBordercolor as while you need
 * @prop {String} borderColor The border Color default border color as while you need
 * @prop {String} warningTitle The warningTitle for Alert title as while
 * @prop {String} warningContent The warningContent for Alert title as while
 * @prop {String} warningButtonText The warningButtonText for Alert title as while
 * @prop {Function} onInputCompleted A function to be called on Completed input fill
 * @prop {Boolean} secureText The secureText if you need to hide text Enter by user
 * @prop {Number} inputCount the inputCount how many count input need
 * @prop {Boolean} showTextCaret the showTextCaret is mean textIndicator inside input
 * @prop {String} inputkeyboardType the inputkeyboardType value on TextInput keybaordtype
 * @prop {Number} inputMaxLength the inputMaxLength mean how many value need on one input
 * @prop {Boolean} restAfterCompleted the restAfterCompleted mean rest allinput value when user entered all value inside input
 */

const OTPVerificationsCodes = ({
  ViewWrapperStyle = {},
  codeInputStyle = {},
  borderColor = "#000",
  focusedBordercolor = "#00FFFF",
  warningTitle = "warning",
  warningContent = "Please Enter Number Only",
  warningButtonText = "Ok",
  onInputCompleted,
  secureText = false,
  inputCount = 4,
  showTextCaret = false,
  inputkeyboardType = "number-pad",
  inputMaxLength = 1,
  restAfterCompleted = true,
}) => {
  const [listInput, setListInput] = useState([]);

  useEffect(() => {
    if (inputCount) {
      const createArray = [...new Array(inputCount)].fill({ input: "" });
      const appendInputValues = createArray.map((_, index) => {
        return {
          [`input${index}`]: "",
        };
      });

      setListInput(appendInputValues);
    }
  }, [inputCount]);

  const inputsRefs = useRef([]);

  const onChanageText = (key, value, changedIndex) => {
    if (!isNaN(value)) {
      let tempInputList = [...listInput];
      let tempInputValue = { ...tempInputList[changedIndex] };

      tempInputValue[key] = value;

      tempInputList[changedIndex] = tempInputValue;

      if (tempInputValue[key] !== "") foucsNextInput(changedIndex);

      setListInput(tempInputList);
    } else createAlert(warningTitle, warningContent, warningButtonText);
  };

  const foucsNextInput = (index) => {
    const nextIndex = index === listInput.length - 1 ? index : index + 1;
    inputsRefs.current[nextIndex]?.focus();
  };

  const onBackKeyPress = (index) => {
    const prevIndex = index === 0 ? 0 : index - 1;
    inputsRefs.current[prevIndex]?.focus();
  };

  useEffect(() => {
    if (listInput.length) {
      let checkLastIndex = listInput.length - 1;
      let tempObject = { ...listInput[checkLastIndex] };

      if (tempObject[`input${checkLastIndex}`] !== "") {
        let OTPCODE = "";
        for (let index = 0; index < listInput.length; index++) {
          const element = listInput[index];
          OTPCODE += String(element[`input${index}`]);
        }

        if (onInputCompleted) onInputCompleted(OTPCODE);
        if (restAfterCompleted) restInputs();
      }
    }
  }, [listInput]);

  const restInputs = () => {
    const newList = listInput.map((item, index) => {
      return {
        [`input${index}`]: "",
      };
    });

    setListInput(newList);
    inputsRefs.current[0]?.focus();
    hideKeyboard();
  };

  const createAlert = (title, body, buttonText) => {
    Alert.alert(title, body, [
      {
        text: buttonText,
        style: "cancel",
      },
    ]);
  };

  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <View style={ViewWrapperStyle}>
      {listInput.map((inputValue, key) => (
        <TextInputView
          key={key}
          index={key}
          inputsRefs={inputsRefs}
          codeInputStyle={codeInputStyle}
          inputValue={inputValue}
          inputkeyboardType={inputkeyboardType}
          inputMaxLength={inputMaxLength}
          IsSecureText={secureText}
          onChanageText={onChanageText}
          onBackKeyPress={onBackKeyPress}
          focusedBordercolor={focusedBordercolor}
          borderColor={borderColor}
          showTextCaret={showTextCaret}
        />
      ))}
    </View>
  );
};

export default OTPVerificationsCodes;
