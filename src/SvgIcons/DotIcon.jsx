import React from 'react'

export default function DotIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
  <defs>
    <filter id="패스_1554" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse">
      <feOffset dx="0.5" dy="0.5" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="0.5" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="그룹_2364" data-name="그룹 2364" transform="translate(-1385 -227)">
    <g transform="matrix(1, 0, 0, 1, 1385, 227)" filter="url(#패스_1554)">
      <g id="패스_1554-2" data-name="패스 1554" transform="translate(1 1)" fill="none">
        <path d="M6.5,0A6.5,6.5,0,1,1,0,6.5,6.5,6.5,0,0,1,6.5,0Z" stroke="none"/>
        <path d="M 6.5 0.5 C 3.191590309143066 0.5 0.5 3.191590309143066 0.5 6.5 C 0.5 9.808409690856934 3.191590309143066 12.5 6.5 12.5 C 9.808409690856934 12.5 12.5 9.808409690856934 12.5 6.5 C 12.5 3.191590309143066 9.808409690856934 0.5 6.5 0.5 M 6.5 0 C 10.0898494720459 0 13 2.910149574279785 13 6.5 C 13 10.0898494720459 10.0898494720459 13 6.5 13 C 2.910149574279785 13 0 10.0898494720459 0 6.5 C 0 2.910149574279785 2.910149574279785 0 6.5 0 Z" stroke="none" fill="#676767"/>
      </g>
    </g>
    <g id="그룹_2340" data-name="그룹 2340" transform="translate(1389.25 231.251)">
      <path id="패스_1702" data-name="패스 1702" d="M-2641.816,6656.351v6.5" transform="translate(2645.066 -6656.351)" fill="none" stroke="#676767" stroke-linecap="round" stroke-width="0.5"/>
      <path id="패스_1703" data-name="패스 1703" d="M0,0V6.5" transform="translate(6.5 3.25) rotate(90)" fill="none" stroke="#676767" stroke-linecap="round" stroke-width="0.5"/>
    </g>
  </g>
</svg>
  )
}
