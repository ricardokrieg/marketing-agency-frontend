import {
  SET_LOADING,
  FETCH_CAMPAIGNS_SUCCESS,
  CREATE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_SUCCESS,
} from './campaigns.actions'
import {ICampaign} from './campaigns.interfaces'

interface CampaignsState {
  loading: boolean
  campaigns: Array<any>
}

const initialState: CampaignsState = {
  loading: false,
  campaigns: [],
}

export const getLoading = (state: { campaign: CampaignsState }): boolean => state.campaign.loading
export const getCampaigns = (state: { campaign: CampaignsState }): Array<ICampaign> => state.campaign.campaigns

const reducer = (state: CampaignsState = initialState, {type, payload}: {type: string, payload: any}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
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
