"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var react_native_2 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = react_1.default.useContext(RootStore_1.RootStoreContext);
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "Workout History page"),
        react_1.default.createElement(react_native_2.Button, { title: "create workout", onPress: function () {
                rootStore.workoutStore.currentExcercise.push({
                    excercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 260
                }, {
                    excercise: "Bench Press",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 200
                }, {
                    excercise: "Deadlift",
                    numSets: 1,
                    reps: 10,
                    sets: ["", "x", "x", "x", "x"],
                    weight: 290
                });
                history.push("/current-workout");
            } })));
});
