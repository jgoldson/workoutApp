"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column",
        padding: 10
    }
});
exports.Card = function (_a) {
    var children = _a.children, onPress = _a.onPress;
    if (onPress) {
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.card, onPress: onPress }, children));
    }
    return react_1.default.createElement(react_native_1.View, { style: styles.card }, children);
};
