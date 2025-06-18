import React from 'react'
import GetQouteHome from './GetQouteHome/GetQouteHome'
import QoutePlumbing from './QoutePlumbing/QoutePlumbing'
import IconsHome from '../home/Icons/IconsHome'
export const metadata = {
  title: "Plumbing Repair Get Qoute",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <div className='bg-gray-100'>
      <GetQouteHome />
      <QoutePlumbing />
      <IconsHome />
    </div>
  )
}
