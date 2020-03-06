"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var index_1 = require("./Router/index");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var CurrentWorkouts_1 = require("./modules/CurrentWorkouts");
exports.Routes = function () {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", component: WorkoutHistory_1.WorkoutHistory }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/current-workout", component: CurrentWorkouts_1.CurrentWorkout }),
            react_1.default.createElement(index_1.Route, { exact: true, path: "/workout/:year/:month/:day", component: CurrentWorkouts_1.CurrentWorkout }))));
};
