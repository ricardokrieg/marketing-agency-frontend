import {ICampaign, ICreateCampaign} from './campaigns.interfaces'

export const SET_LOADING = 'SET_LOADING'
export const FETCH_CAMPAIGN = 'FETCH_CAMPAIGN'
export const FETCH_CAMPAIGN_SUCCESS = 'FETCH_CAMPAIGN_SUCCESS'
export const FETCH_CAMPAIGN_ERROR = 'FETCH_CAMPAIGN_ERROR'
export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS'
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS'
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN'
export const CREATE_CAMPAIGN_SUCCESS = 'CREATE_CAMPAIGN_SUCCESS'
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN'
export const UPDATE_CAMPAIGN_SUCCESS = 'UPDATE_CAMPAIGN_SUCCESS'
export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN'
export const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS'

export const setLoading = () => {
  return {type: SET_LOADING}
}

export const fetchCampaign = (payload: string) => {
  return {type: FETCH_CAMPAIGN, payload}
}

export const fetchCampaignSuccess = (payload: ICampaign) => {
  return {type: FETCH_CAMPAIGN_SUCCESS, payload}
}

export const fetchCampaignError = (payload: any) => {
  return {type: FETCH_CAMPAIGN_ERROR, payload}
}

export const fetchCampaigns = () => {
  return {type: FETCH_CAMPAIGNS}
}

export const fetchCampaignsSuccess = (payload: Array<ICampaign>) => {
  return {type: FETCH_CAMPAIGNS_SUCCESS, payload}
}

export const createCampaign = (payload: ICreateCampaign) => {
  return {type: CREATE_CAMPAIGN, payload}
}

export const createCampaignSuccess = (payload: ICampaign) => {
  return {type: CREATE_CAMPAIGN_SUCCESS, payload}
}

export const updateCampaign = () => {
  return {type: UPDATE_CAMPAIGN}
}

export const updateCampaignSuccess = (payload: ICampaign) => {
  return {type: UPDATE_CAMPAIGN_SUCCESS, payload}
}

export const deleteCampaign = (payload: string) => {
  return {type: DELETE_CAMPAIGN, payload}
}

export const deleteCampaignSuccess = (payload: string) => {
  return {type: DELETE_CAMPAIGN_SUCCESS, payload}
}
