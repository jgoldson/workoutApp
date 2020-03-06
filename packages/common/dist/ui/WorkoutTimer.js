"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#e8f4f8"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        flex: 1
    },
    x: {
        color: "#393F4B",
        fontSize: 25
    },
    timeText: {
        color: "#393F4B",
        fontSize: 25
    },
    progressBar: {
        height: 5,
        backgroundColor: "#9CADCE"
    }
});
exports.WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress, currentTime = _a.currentTime, percent = _a.percent;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: [styles.progressBar, { width: percent }] }),
        react_1.default.createElement(react_native_1.View, { style: styles.row },
            react_1.default.createElement(react_native_1.Text, { style: styles.timeText }, currentTime),
            react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
                react_1.default.createElement(react_native_1.Text, { style: styles.x }, "X")))));
};
