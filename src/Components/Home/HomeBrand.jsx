import React from 'react'
import { useQuery } from 'react-query';

export default function HomeBrand() {
  const {data:dbInfoData} = useQuery('dbInfo',() => {
    return fetch('api/brands')
   .then((response) => response.json())
  })

  console.log(dbInfoData.result.length)
  return (
    <>
    </>
  )
}
