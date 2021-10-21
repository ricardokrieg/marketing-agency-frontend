import React, {MouseEventHandler, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import {useParams, Redirect} from 'react-router-dom'

import {
  fetchCampaign,
} from '../../mass-dm/campaigns/campaigns.actions'
import {getCampaign, getLoading, getError} from '../../mass-dm/campaigns/campaigns.reducers'
import {CampaignNotFoundError} from '../../mass-dm/campaigns/campaigns.errors'
import {ICampaign} from '../../mass-dm/campaigns/campaigns.interfaces'

const CampaignDetails = () => {
  const dispatch = useDispatch()
  const error: any = useSelector(getError)
  const loading: boolean = useSelector(getLoading)
  const campaign: ICampaign | null = useSelector(getCampaign)
  const { id }: { id: string } = useParams()

  useEffect(() => {
    dispatch(fetchCampaign(id))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error instanceof CampaignNotFoundError) {
    return <Redirect to="/mass-dm" />
  }

  if (error !== null || campaign === null) {
    return <div>Erro</div>
  }

  return (
    <div className='campaigns'>
      <div className='header'>
        <h1>{campaign.title}</h1>
      </div>
    </div>
  )
}

export default CampaignDetails
