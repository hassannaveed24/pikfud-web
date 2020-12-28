import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

https: ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" render={(props) => <Layout {...props} />} />
        {/* <Redirect></Redirect> */}
        {/* to-do
               job apply
               jobs table last column on right
                blogs filter onclick check
               */}
      </Switch>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
