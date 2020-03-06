"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    fab: {
        width: 40,
        height: 40,
        backgroundColor: "pink",
        position: "absolute",
        bottom: 10,
        right: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        marginLeft: 2,
        marginBottom: 2
    }
});
exports.Fab = function (_a) {
    var onPress = _a.onPress;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.fab, onPress: onPress },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "+")));
};
