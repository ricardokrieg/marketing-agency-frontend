import { spawn } from 'redux-saga/effects'

import campaignSaga from './mass-dm/campaigns/campaigns.saga'

export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(campaignSaga)
}
