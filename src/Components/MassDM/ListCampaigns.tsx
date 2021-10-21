import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './style.css'
import {Link, NavLink} from 'react-router-dom'

import {
  fetchCampaigns
} from '../../mass-dm/campaigns/campaigns.actions'
import {getCampaigns, getLoading} from '../../mass-dm/campaigns/campaigns.reducers'
import {ICampaign} from '../../mass-dm/campaigns/campaigns.interfaces'

interface CampaignProps {
  campaign: ICampaign
}

const Campaign = (props: CampaignProps) => {
  return (
    <div className='campaign'>
      <div className='header'>
        <div className='title'>
          {props.campaign.title}
        </div>
        {props.campaign.title}
      </div>

      <div className='message'>
        {props.campaign.title}
      </div>

      <div className='footer'>
        <div>{props.campaign.title}</div>
        <Link to="/mass-dm/${props.campaign.uuid}">Detalhes</Link>
      </div>
    </div>
  )
}

const ListCampaigns = () => {
  const dispatch = useDispatch()
  const loading = useSelector(getLoading)
  const campaigns = useSelector(getCampaigns)

  useEffect(() => {
    dispatch(fetchCampaigns())
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='campaigns'>
      <div className='header'>
        <h1>Minhas Campanhas</h1>
        <Link to='/mass-dm/new'>Criar Camapanha</Link>
      </div>

      <div className='View'>
        <ul className='pills'>
          <NavLink exact to='/mass-dm' activeClassName='current'>
            <span className='material-icons'>circle</span>
            Todas
          </NavLink>

          <NavLink exact to='/mass-dm/pending' activeClassName='current'>
            <span className='material-icons'>circle</span>
            Pendentes
          </NavLink>

          <NavLink exact to='/mass-dm/active' activeClassName='current'>
            <span className='material-icons'>circle</span>
            Ativas
          </NavLink>

          <NavLink exact to='/mass-dm/completed' activeClassName='current'>
            <span className='material-icons'>circle</span>
            Finalizadas
          </NavLink>
        </ul>

        <div className='View'>
          {campaigns && campaigns.map((campaign: ICampaign) => <Campaign campaign={campaign} />)}
        </div>
      </div>
    </div>
  )
}

export default ListCampaigns
