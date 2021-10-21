import {ICampaign} from './campaigns.interfaces'

export const SET_LOADING = 'SET_LOADING'
export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS'
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS'
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN'
export const CREATE_CAMPAIGN_SUCCESS = 'CREATE_CAMPAIGN_SUCCESS'
export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN'
export const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS'

export const setLoading = () => {
  return {type: SET_LOADING}
}

export const fetchCampaigns = () => {
  return {type: FETCH_CAMPAIGNS}
}

export const fetchCampaignsSuccess = (payload: Array<ICampaign>) => {
  return {type: FETCH_CAMPAIGNS_SUCCESS, payload}
}

export const createCampaign = () => {
  return {type: CREATE_CAMPAIGN}
}

export const createCampaignSuccess = (payload: ICampaign) => {
  return {type: CREATE_CAMPAIGN_SUCCESS, payload}
}

export const deleteCampaign = () => {
  return {type: DELETE_CAMPAIGN}
}

export const deleteCampaignSuccess = (payload: string) => {
  return {type: DELETE_CAMPAIGN_SUCCESS, payload}
}
