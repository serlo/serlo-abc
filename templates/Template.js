import React from 'react'
import { TextTemplate } from './TextTemplate'

const templateMap = new Map()
templateMap.set("Text", TextTemplate)

export const getTemplate = function(slide) {
  let T = templateMap.get(slide.template)
  return <T {...slide}/>
}
