import React, {useState} from 'react';
import './style.css';
import {Link, NavLink} from 'react-router-dom';
import {ICampaign} from "./Interfaces";

interface CampaignProps {
  campaign: ICampaign,
}

function Campaign(props: CampaignProps) {
  return (
    <div className='campaign'>
      <div className='header'>
        <div className='title'>
          {props.campaign.title}
        </div>
        {props.campaign.status}
      </div>

      <div className='message'>
        {props.campaign.message}
      </div>

      <div className='footer'>
        <div>{props.campaign.created_at}</div>
        <Link to="/mass-dm/${props.campaign.uuid}">Detalhes</Link>
      </div>
    </div>
  )
}

function ListCampaigns() {
  let [campaigns, setCampaigns] = useState([])

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
          {campaigns.map((campaign: ICampaign) => <Campaign campaign={campaign} />)}
        </div>
      </div>
    </div>
  )
}

export default ListCampaigns;
