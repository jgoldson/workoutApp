"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = require("./Card");
var react_native_1 = require("react-native");
var excerciseShortName = {
    Squat: "SQ",
    Deadlift: "DL",
    "Bench Press": "BP",
    "Overhead Press": "OHP",
    "Barbell Row": "ROW"
};
exports.HistoryCard = function (_a) {
    var header = _a.header, currentExcercises = _a.currentExcercises, onPress = _a.onPress;
    return (react_1.default.createElement(Card_1.Card, { onPress: onPress },
        react_1.default.createElement(react_native_1.Text, null, header),
        currentExcercises.map(function (ce) {
            return (react_1.default.createElement(react_native_1.Text, { key: ce.excercise }, excerciseShortName[ce.excercise] + " " + ce.numSets + "x" + ce.reps + " " + ce.weight));
        })));
};
