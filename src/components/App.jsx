import React from "react";
import { Route } from "react-router-dom";
import Header from "./core/Header";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import CourseManagePage from "./pages/CourseManagePage";

export default function App() {
  return (
    <>
      <Header />
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/course/:slug" component={CourseManagePage} />
            <Route exact path="/course" component={CourseManagePage} />
            <Route exact path="/about" component={AboutPage} />
          </div>
        </div>
      </main>
    </>
  );
}
