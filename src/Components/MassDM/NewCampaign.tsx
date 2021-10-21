import React, {FormEvent, useState} from 'react'
import './style.css'
import {useDispatch} from 'react-redux'
import {createCampaign} from "../../mass-dm/campaigns/campaigns.actions";

const NewCampaign = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch(createCampaign({ title }))
  }

  return (
    <div className='View'>
      <h1>Criar Campanha de Mass DM</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder='título' onChange={(e: any) => setTitle(e.target.value)} />
        <input type="text" placeholder='mensagem' />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewCampaign
