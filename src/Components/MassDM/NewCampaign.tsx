import React from 'react';
import './style.css';

function NewCampaign() {
  return (
    <div className='View'>
      <h1>Criar Campanha de Mass DM</h1>

      <form action="">
        <input type="text" placeholder='título' />
        <input type="text" placeholder='mensagem' />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewCampaign;
