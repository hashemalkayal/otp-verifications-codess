## compatible with iOS and Android

![SCREENSHOT](https://user-images.githubusercontent.com/73720742/136539014-5b6af012-953e-45b3-87b2-d96bf65efb8a.gif)

## Installation

```bash
$ using (npm) npm i otp-verifications-codes --save

$ using (yarn) yarn add otp-verifications-codes
```

## Usage

### Basic Usage

Set the callback function when onInputCompleted, you can get the OTP input insert by the user.

Auto rest input Value onCompleted Acitve Code

```javascript
import OTPVerificationsCodes from "otp-verifications-codes";
...

<OTPVerificationsCodes
  onInputCompleted={(otpCode) => onInputCompleted(otpCode)}
/>

onInputCompleted = (text) => {
	 // Do what you want to do here Like axios call or fetch
}
...
```

### Advanced Usage

```javascript
import OTPVerificationsCodes from "otp-verifications-codes";

<View style={styles.container}>
  <View style={styles.simpleModal}>
    <Text style={{ textAlign: "center", color: "#000" }}>
      react native OTPVerificationsCodes
    </Text>
    <OTPVerificationsCodes
      ViewWrapperStyle={styles.ViewWrapperStyle}
      codeInputStyle={styles.inputStyle}
      focusedBordercolor={"#00FFFF"}
      borderColor={"black"}
      warningTitle={"warning"}
      warningContent={"Please Enter Number Only"}
      warningButtonText={"ok"}
      onInputCompleted={(otpCode) => console.log(otpCode)}
      inputCount={4}
    />
  </View>
</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0C0C0",
  },
  simpleModal: {
    width: "80%",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    opacity: 0.8,
    paddingTop: 20,
    paddingBottom: 30,
    marginBottom: -30,
  },
  inputStyle: {
    height: 35,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#FEFFFE",
    color: "#222",
    padding: 5,
    width: 35,
    textAlign: "center",
  },
  ViewWrapperStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
});
```

## **Properties**

|        Prop        | PropType |      Default Value       | isRequired |
| :----------------: | :------: | :----------------------: | :--------: |
|  ViewWrapperStyle  |  Object  |          Empty           |    Yes     |
|   codeInputStyle   |  Object  |          Empty           |    Yes     |
|    borderColor     |  String  |           #000           |     No     |
| focusedBordercolor |  String  |         #00FFFF          |     No     |
|    warningTitle    |  String  |         warning          |     No     |
|   warningContent   |  String  | Please Enter Number Only |     No     |
| warningButtonText  |  String  |            Ok            |     No     |
|     inputCount     |  Number  |            4             |     No     |
|   showTextCaret    | Boolean  |          false           |     No     |
| inputkeyboardType  |  String  |        number-pad        |     No     |
|   inputMaxLength   |  Number  |            1             |     No     |
| restAfterCompleted | Boolean  |           true           |     No     |

## **Methods**

|       Name       | isRequired |                                      Description                                       |
| :--------------: | :--------: | :------------------------------------------------------------------------------------: |
| onInputCompleted |    Yes     | When the text in the input box completed, the method is called, and Otp code returned. |
|    inputCount    |     No     |                             How you need number of count.                              |
