import React from "react";
import { TextInput } from "react-native";

const TextInputView = ({
  IsSecureText = false,
  codeInputStyle,
  focusedBordercolor,
  borderColor,
  inputkeyboardType,
  showTextCaret,
  inputMaxLength,
  inputValue,
  index,
  inputsRefs,
  onChanageText,
  onBackKeyPress,
}) => {
  return (
    <TextInput
      secureTextEntry={IsSecureText}
      caretHidden={showTextCaret}
      ref={(elRef) => (inputsRefs.current[index] = elRef)}
      value={inputValue[`input${index}`]}
      onChangeText={(text) => onChanageText(`input${index}`, text, index)}
      onKeyPress={({ nativeEvent }) => {
        nativeEvent.key === "Backspace" && onBackKeyPress(index);
      }}
      // TODO
      //   onTouchStart={checkPrevInputValue}
      //   onPressIn={checkPrevInputValue}
      maxLength={inputMaxLength}
      showSoftInputOnFocus={true}
      keyboardType={inputkeyboardType}
      style={[
        codeInputStyle,
        {
          borderColor: inputsRefs.current[index]?.isFocused()
            ? focusedBordercolor
            : borderColor,
        },
      ]}
    />
  );
};

export default TextInputView;
