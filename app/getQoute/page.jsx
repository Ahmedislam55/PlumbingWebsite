import React from 'react'
import GetQouteHome from './GetQouteHome/GetQouteHome'
import QoutePlumbing from './QoutePlumbing/QoutePlumbing'
import IconsHome from '../home/Icons/IconsHome'

export default function page() {
  return (
    <div className='bg-gray-100'>
      <GetQouteHome />
      <QoutePlumbing />
      <IconsHome />
    </div>
  )
}
