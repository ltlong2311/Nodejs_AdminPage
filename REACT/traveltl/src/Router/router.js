import React from "react";
import { Switch, Route } from "react-router-dom";
import OverviewPage from "../Components/Pages/OverviewPage";
import PostListPage from "../Components/Pages/PostListPage";

function router(props) {
  return (
    <Switch>
      <Route exact path="/" component={OverviewPage} />
      <Route path="/overview" component={OverviewPage} />
      <Route path="/post">
        <PostListPage postData={props.postData} />
      </Route>
    </Switch>
  );
}

export default router;
