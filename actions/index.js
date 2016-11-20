// Actions
export const NEXT = 'NEXT'
export const TUTORIAL = 'TUTORIAL'
export const BACK = "BACK"

// Action creators
export const next = () => ({
  type: NEXT
})

export const tutorial = (view) => ({
  type: TUTORIAL
  lastView:view
})

export const back = () => ({
  type:BACK
})
