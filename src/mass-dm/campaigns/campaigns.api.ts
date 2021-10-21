import api from '../../api'
import {ICampaign, ICampaignCreated, ICreateCampaign} from './campaigns.interfaces'

export const list = async (): Promise<Array<ICampaign>> => {
  try {
    const campaigns = await api.get('campaigns')

    // @ts-ignore
    return campaigns.data.data
  } catch(err) {
    console.error(err)
    throw err
  }
}

export const create = async (params: ICreateCampaign): Promise<ICampaignCreated> => {
  try {
    const campaign = await api.post('campaigns', params)

    // @ts-ignore
    return campaign.data.data
  } catch(err) {
    console.error(err)
    throw err
  }
}

export const destroy = async (id: string): Promise<void> => {
  try {
    await api.delete(`campaigns/${id}`)
  } catch(err) {
    console.error(err)
    throw err
  }
}
