"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var react_native_2 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var RootStore_1 = require("../stores/RootStore");
var WorkoutTimer_1 = require("../ui/WorkoutTimer");
var dayjs_1 = __importDefault(require("dayjs"));
var react_native_3 = require("react-native");
var styles = react_native_2.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    scrollContainer: {
        padding: 10,
        marginBottom: 50
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history, _b = _a.match.params, day = _b.day, month = _b.month, year = _b.year;
    var rootStore = react_1.default.useContext(RootStore_1.RootStoreContext);
    react_1.default.useEffect(function () {
        return function () {
            rootStore.workoutTimerStore.stopTimer();
        };
    }, []);
    var isCurrentWorkout = !year && !month && !day;
    var dateKey = year + "-" + month + "-" + day;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_3.ScrollView, { keyboardShouldPersistTaps: "always", contentContainerStyle: styles.scrollContainer },
            (isCurrentWorkout
                ? rootStore.workoutStore.currentExcercises
                : rootStore.workoutStore.history[dateKey]).map(function (e) {
                return (react_1.default.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                        rootStore.workoutTimerStore.startTimer();
                        var v = e.sets[setIndex];
                        var newValue;
                        if (v === "") {
                            newValue = "" + e.reps;
                        }
                        else if (v === "0") {
                            rootStore.workoutTimerStore.stopTimer();
                            newValue = "";
                        }
                        else {
                            newValue = "" + (parseInt(v) - 1);
                        }
                        e.sets[setIndex] = newValue;
                    }, key: e.excercise, excercise: e.excercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight, sets: e.sets }));
            }),
            react_1.default.createElement(react_native_1.Button, { title: "SAVE", onPress: function () {
                    if (isCurrentWorkout) {
                        rootStore.workoutStore.history[dayjs_1.default().format("YYYY-MM-DD")] =
                            rootStore.workoutStore.currentExcercises;
                        rootStore.workoutStore.currentExcercises = [];
                    }
                    history.push("/");
                } })),
        rootStore.workoutTimerStore.isRunning ? (react_1.default.createElement(WorkoutTimer_1.WorkoutTimer, { percent: rootStore.workoutTimerStore.percent, currentTime: rootStore.workoutTimerStore.display, onXPress: function () { return rootStore.workoutTimerStore.stopTimer(); } })) : null));
});
