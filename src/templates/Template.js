import { TextTemplate } from './TextTemplate'
import { TextTutorialTemplate } from './TextTutorialTemplate'
import { MenuTemplate } from './MenuTemplate'

const templateMap = new Map()
templateMap.set('Text', TextTemplate)
templateMap.set('TextTutorial', TextTutorialTemplate)
templateMap.set('Menu', MenuTemplate)

export const getTemplate = (template) => templateMap.get(template)
