import {
  SET_LOADING,
  FETCH_CAMPAIGN_SUCCESS,
  FETCH_CAMPAIGNS_SUCCESS,
  CREATE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_SUCCESS, FETCH_CAMPAIGN_ERROR,
} from './campaigns.actions'
import {ICampaign} from './campaigns.interfaces'

interface CampaignsState {
  error: any
  loading: boolean
  campaigns: Array<ICampaign>
  campaign: ICampaign | null
}

const initialState: CampaignsState = {
  error: null,
  loading: false,
  campaigns: [],
  campaign: null,
}

export const getError = (state: { campaign: CampaignsState }): boolean => state.campaign.error
export const getLoading = (state: { campaign: CampaignsState }): boolean => state.campaign.loading
export const getCampaigns = (state: { campaign: CampaignsState }): Array<ICampaign> => state.campaign.campaigns
export const getCampaign = (state: { campaign: CampaignsState }): ICampaign | null => state.campaign.campaign

const reducer = (state: CampaignsState = initialState, {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaign: payload,
        loading: false,
      }
    case FETCH_CAMPAIGN_ERROR:
      return {
        ...state,
        campaign: null,
        loading: false,
        error: payload,
      }
    case FETCH_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        campaigns: payload,
        loading: false,
      }
    case CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: [...state.campaigns, payload],
        loading: false,
      }
    case DELETE_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: state.campaigns.filter(campaign => campaign.id !== payload),
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
