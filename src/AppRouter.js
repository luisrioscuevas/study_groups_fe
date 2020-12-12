import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import LearnerDashboard from './components/LearnerView/LearnerDashboard';
import TeacherDashboard from "./components/TeacherView/TeacherDashboard";

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/learner">
                <LearnerDashboard />
            </Route>
            <Route path="/teacher">
                <TeacherDashboard />
            </Route>
        </Switch>
    );
}