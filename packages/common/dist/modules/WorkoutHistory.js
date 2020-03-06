"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var RootStore_1 = require("../stores/RootStore");
var HistoryCard_1 = require("../ui/HistoryCard");
var react_native_2 = require("react-native");
var fab_1 = require("../ui/fab");
var styles = react_native_2.StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    cardContainer: {
        flex: 1,
        padding: 10
    },
    container: {
        flex: 1
    }
});
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = react_1.default.useContext(RootStore_1.RootStoreContext);
    var rows = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], excercises = _a[1];
        if (i % 3 === 0) {
            rows.push([
                {
                    date: date,
                    excercises: excercises
                }
            ]);
        }
        else {
            rows[rows.length - 1].push({
                date: date,
                excercises: excercises
            });
        }
    });
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.FlatList, { renderItem: function (_a) {
                var item = _a.item;
                return (react_1.default.createElement(react_native_1.View, { style: styles.row },
                    item.map(function (_a) {
                        var date = _a.date, excercises = _a.excercises;
                        return (react_1.default.createElement(react_native_1.View, { key: date, style: styles.cardContainer },
                            react_1.default.createElement(HistoryCard_1.HistoryCard, { onPress: function () {
                                    var parts = date.split("-");
                                    history.push("/workout/" + parts[0] + "/" + parts[1] + "/" + parts[2]);
                                }, header: date, currentExcercises: excercises })));
                    }),
                    item.length < 3 ? react_1.default.createElement(react_native_1.View, { style: styles.cardContainer }) : null,
                    item.length < 2 ? react_1.default.createElement(react_native_1.View, { style: styles.cardContainer }) : null));
            }, data: rows, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv.date; }, ""); } }),
        react_1.default.createElement(fab_1.Fab, { onPress: function () {
                if (!rootStore.workoutStore.hasCurrentWorkout) {
                    var _a = rootStore.workoutStore, currentBarbellRow = _a.currentBarbellRow, currentBenchPress = _a.currentBenchPress, currentDeadlift = _a.currentDeadlift, currentOverheadPress = _a.currentOverheadPress, currentSquat = _a.currentSquat;
                    var emptySets = ["", "", "", "", ""];
                    if (rootStore.workoutStore.lastWorkoutType === "b") {
                        rootStore.workoutStore.currentExcercises.push({
                            excercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: __spreadArrays(emptySets),
                            weight: currentSquat
                        }, {
                            excercise: "Bench Press",
                            numSets: 5,
                            reps: 5,
                            sets: __spreadArrays(emptySets),
                            weight: currentBenchPress
                        }, {
                            excercise: "Deadlift",
                            numSets: 1,
                            reps: 10,
                            sets: ["", "x", "x", "x", "x"],
                            weight: currentDeadlift
                        });
                        rootStore.workoutStore.currentSquat += 5;
                        rootStore.workoutStore.currentBenchPress += 5;
                        rootStore.workoutStore.currentDeadlift += 5;
                    }
                    else {
                        rootStore.workoutStore.currentExcercises.push({
                            excercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: __spreadArrays(emptySets),
                            weight: currentSquat
                        }, {
                            excercise: "Overhead Press",
                            numSets: 5,
                            reps: 5,
                            sets: __spreadArrays(emptySets),
                            weight: currentOverheadPress
                        }, {
                            excercise: "Barbell Row",
                            numSets: 1,
                            reps: 5,
                            sets: __spreadArrays(emptySets),
                            weight: currentBarbellRow
                        });
                        rootStore.workoutStore.currentSquat += 5;
                        rootStore.workoutStore.currentOverheadPress += 5;
                        rootStore.workoutStore.currentBarbellRow += 5;
                    }
                    /* If A then set to B otherwise set to A */
                    rootStore.workoutStore.lastWorkoutType =
                        rootStore.workoutStore.lastWorkoutType === "a" ? "a" : "b";
                }
                history.push("/current-workout");
            } })));
});
