import React from 'react'
import { TextTemplate } from './TextTemplate'
import { TextTutorialTemplate } from './TextTutorialTemplate'
import { MenuTemplate } from './MenuTemplate'

import { lessons } from '../courses/CourseAbc'

const templateMap = new Map()
templateMap.set("Text", TextTemplate)
templateMap.set("TextTutorial", TextTutorialTemplate)
templateMap.set("Menu", MenuTemplate)

export const getTemplate = function(template) {
  let T = templateMap.get(template)
  return T;
}
