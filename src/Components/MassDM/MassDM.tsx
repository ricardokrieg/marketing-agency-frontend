import React from 'react';
import './style.css';
import {Route, useRouteMatch} from 'react-router-dom';
import ListCampaigns from "./ListCampaigns";
import NewCampaign from "./NewCampaign";

function MassDM() {
  const {path} = useRouteMatch();

  return (
    <div>
      <Route exact path={path} component={ListCampaigns} />
      <Route path={`${path}/new`} component={NewCampaign} />
    </div>
  )
}

export default MassDM;
