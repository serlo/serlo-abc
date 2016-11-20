import React from 'react'
import { TextTemplate } from './TextTemplate'
import { TextTutorialTemplate } from './TextTutorialTemplate'
import { MenuTemplate } from './MenuTemplate'

const templateMap = new Map()
templateMap.set("Text", TextTemplate)
templateMap.set("TextTutorial", TextTutorialTemplate)
templateMap.set("Menu", MenuTemplate)

export const getTemplate = function(slide) {
  console.log(slide.template)
  let T = templateMap.get(slide.template)
  console.log(T)
  return <T {...slide}/>
}
