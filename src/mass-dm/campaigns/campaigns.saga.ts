import {
  put,
  call,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'

import {
  CREATE_CAMPAIGN,
  createCampaignSuccess,
  DELETE_CAMPAIGN,
  deleteCampaignSuccess,
  FETCH_CAMPAIGNS,
  fetchCampaignsSuccess,
  setLoading,
} from './campaigns.actions'

import {
  list,
  create,
  destroy,
} from './campaigns.api'
import {ICampaign, ICampaignCreated, ICreateCampaign} from './campaigns.interfaces'

function* getCampaigns() {
  yield put(setLoading())

  const campaigns: Array<ICampaign> = yield call(list)

  yield put(fetchCampaignsSuccess(campaigns))
}

function* createCampaign(payload: ICreateCampaign) {
  yield put(setLoading())

  const campaign: ICampaignCreated = yield call(create, payload)

  yield put(createCampaignSuccess({ ...payload, id: campaign.id }))
}

function* deleteCampaign(payload: string) {
  yield put(setLoading())

  yield call(destroy, payload)

  yield put(deleteCampaignSuccess(payload))
}

export default function* todoSaga() {
  yield takeEvery(FETCH_CAMPAIGNS, getCampaigns)
  // @ts-ignore
  yield takeLatest(CREATE_CAMPAIGN, createCampaign)
  // @ts-ignore
  yield takeLatest(DELETE_CAMPAIGN, deleteCampaign)
}
