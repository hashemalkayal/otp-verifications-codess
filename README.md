### compatible with iOS and Android

| ![android](https://github.com/hashemalkayal/otp-verifications-codess/blob/master/screenshot/OTP1.jpeg) | ![iOS](https://github.com/hashemalkayal/otp-verifications-codess/blob/master/screenshot/OTP2.jpeg) |
| :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
|                                               on Android                                               |                                               on iOS                                               |

## Installation

```bash
$ npm i otp-verifications-codes --save
```

## Usage

### Basic

Set the callback function when onInputCompleted, you can get the OTP input insert by the user.

## Ex:

```javascript
import OTPVerificationsCodes from "otp-verifications-codes";
...

<OTPVerificationsCodes
  onInputCompleted={(otpCode) => onInputCompleted(otpCode)}
/>

onInputCompleted = (text) => {
	 // Do what you want to do here
}
...
```

### Advanced Usage

```javascript
import OTPVerificationsCodes from "otp-verifications-codes";
...

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
          warningContent={"Please Enter Only Number"}
          warningButtonText={"ok"}
          onInputCompleted={(otpCode) => console.log(otpCode)}
        />
      </View>
    </View>

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
  }
...
```
