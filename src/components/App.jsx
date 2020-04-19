import React from "react";
import { Route, Switch } from "react-router-dom";
import ToastContainer from "../components/core/ToastContainer";
import Header from "./core/Header";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import CourseManagePage from "./pages/CourseManagePage";
import AuthorPage from "./pages/AuthorPage";
import AuthorManagePage from "./pages/AuthorManagePage";
export default function App() {
  return (
    <>
      <Header />
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/courses" component={CoursesPage} />
              <Route exact path="/course/:slug" component={CourseManagePage} />
              <Route exact path="/course" component={CourseManagePage} />
              <Route exact path="/authors" component={AuthorPage} />
              <Route exact path="/author/:name" component={AuthorManagePage} />
              <Route exact path="/author" component={AuthorManagePage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </div>
      </main>
      <ToastContainer autoClose={4000} />
    </>
  );
}
