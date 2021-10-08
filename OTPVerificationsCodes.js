import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Alert, Keyboard } from "react-native";

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
 */

const OTPVerificationsCodes = ({
  ViewWrapperStyle = {},
  codeInputStyle = {},
  borderColor = "",
  focusedBordercolor = "",
  warningTitle = "",
  warningContent = "",
  warningButtonText = "",
  onInputCompleted,
  secureText = false,
}) => {
  const [inputs, setInputs] = useState({
    firstInputValue: "",
    secondInputValue: "",
    thirdInputValue: "",
    fourthInputValue: "",
  });

  const firstInpuRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  useEffect(() => {
    if (!!inputs.fourthInputValue) {
      if (onCompletedCodeValue()) {
        const OTPCODE = Object.values(inputs).reduce((a, b) => a + b);

        onInputCompleted(OTPCODE);
        rest();
      }
    }
  }, [inputs]);

  const createAlert = (title, body, buttonText) => {
    Alert.alert(title, body, [
      {
        text: buttonText || "ok",
        style: "cancel",
      },
    ]);
  };

  const OnChange = (text, key, foucsInput, prevFocusInput) => {
    console.log(text);
    if (!Boolean(text)) {
      setInputs({ ...inputs, [key]: "" });
      reversefocus(prevFocusInput);
    } else {
      if (!isNaN(text)) {
        setInputs({ ...inputs, [key]: text });
        foucsInput.current.focus();
      } else createAlert(warningTitle, warningContent, warningButtonText);
    }
  };

  const onCompletedCodeValue = () => {
    for (const key in inputs)
      if (!!inputs[key]) return true;
      else return false;
  };

  const rest = () => {
    firstInpuRef.current.clear();
    secondInputRef.current.clear();
    thirdInputRef.current.clear();
    fourthInputRef.current.clear();

    setInputs({
      firstInputValue: "",
      secondInput: "",
      thirdInputValue: "",
      fourthInputValue: "",
    });

    firstInpuRef.current.focus();
    hideKeyboard();
  };

  const reversefocus = (foucsInput) => foucsInput.current.focus();

  const onInputFocus = (prevInputValue, foucsInput) =>
    !Boolean(prevInputValue) && foucsInput.current.focus();

  const hideKeyboard = () => Keyboard.dismiss();

  const onDeleteKeypress = (prevInput) => prevInput.current.focus();

  const borderColorSelected = (foucsInput) =>
    Boolean(foucsInput?.current?.isFocused())
      ? focusedBordercolor
      : borderColor;

  return (
    <View style={ViewWrapperStyle}>
      <TextInput
        secureTextEntry={secureText}
        caretHidden={true}
        onTouchStart={() => {
          setInputs({ ...inputs, firstInputValue: "" });
          firstInpuRef.current.focus();
        }}
        ref={firstInpuRef}
        onPressIn={borderColorSelected}
        maxLength={1}
        showSoftInputOnFocus={true}
        keyboardType="number-pad"
        value={inputs.firstInputValue}
        onChangeText={(text) =>
          OnChange(text, "firstInputValue", secondInputRef, firstInpuRef)
        }
        style={[
          codeInputStyle,
          { borderColor: borderColorSelected(firstInpuRef) },
        ]}
      />

      <TextInput
        secureTextEntry={secureText}
        caretHidden={true}
        ref={secondInputRef}
        maxLength={1}
        showSoftInputOnFocus={true}
        onFocus={() => onInputFocus(inputs.firstInputValue, firstInpuRef)}
        keyboardType="number-pad"
        value={inputs.secondInputValue}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === "Backspace" && onDeleteKeypress(firstInpuRef);
        }}
        onChangeText={(text) =>
          OnChange(text, "secondInputValue", thirdInputRef, firstInpuRef)
        }
        style={[
          codeInputStyle,
          { borderColor: borderColorSelected(secondInputRef) },
        ]}
      />

      <TextInput
        secureTextEntry={secureText}
        caretHidden={true}
        ref={thirdInputRef}
        maxLength={1}
        showSoftInputOnFocus={true}
        onFocus={() => onInputFocus(inputs.secondInputValue, secondInputRef)}
        keyboardType="number-pad"
        value={inputs.thirdInputValue}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === "Backspace" && onDeleteKeypress(secondInputRef);
        }}
        onChangeText={(text) =>
          OnChange(text, "thirdInputValue", fourthInputRef, secondInputRef)
        }
        style={[
          codeInputStyle,
          { borderColor: borderColorSelected(thirdInputRef) },
        ]}
      />

      <TextInput
        secureTextEntry={secureText}
        caretHidden={true}
        ref={fourthInputRef}
        maxLength={1}
        showSoftInputOnFocus={true}
        onFocus={() => onInputFocus(inputs.thirdInputValue, thirdInputRef)}
        keyboardType="number-pad"
        value={inputs.fourthInputValue}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === "Backspace" && onDeleteKeypress(thirdInputRef);
        }}
        onChangeText={(text) =>
          OnChange(text, "fourthInputValue", fourthInputRef, thirdInputRef)
        }
        style={[
          codeInputStyle,
          { borderColor: borderColorSelected(fourthInputRef) },
        ]}
      />
    </View>
  );
};

export default OTPVerificationsCodes;
