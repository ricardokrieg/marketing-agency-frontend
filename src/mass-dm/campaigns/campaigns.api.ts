import api from '../../api'
import {ICampaign, ICampaignCreated, ICreateCampaign, IUpdateCampaign} from './campaigns.interfaces'
import {CampaignNotFoundError} from './campaigns.errors'

export const get = async (id: string): Promise<ICampaign> => {
  try {
    const response = await api.get(`campaigns/${id}`)

    // @ts-ignore
    if (response.status === 404) {
      throw new CampaignNotFoundError()
    }

    // @ts-ignore
    return response.data.data
  } catch(err) {
    console.error(err)
    throw err
  }
}

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

export const update = async (id: string, params: IUpdateCampaign): Promise<void> => {
  try {
    await api.patch(`campaigns/${id}`, params)
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
