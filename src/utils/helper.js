const { showMessage } = require("react-native-flash-message")

export const showError = (message) => {
    showMessage({
        message: message ?? "Something went wrong",
        type: "danger",
    })
}

export const showSuccess = (message) => {
    showMessage({
        message: message ?? "Success",
        type: "success",
    })
}