import React from 'react'
import './style.css'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import ListCampaigns from './ListCampaigns'
import NewCampaign from './NewCampaign'
import CampaignDetails from './CampaignDetails'

function MassDM() {
  const {path} = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route exact path={path} component={ListCampaigns} />
        <Route path={`${path}/new`} component={NewCampaign} />
        <Route path={`${path}/:id`} component={CampaignDetails} />
      </Switch>
    </div>
  )
}

export default MassDM;
