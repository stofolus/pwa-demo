import React, { FunctionComponent } from 'react'

export enum ALERT_LEVEL {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

interface Props {
  level?: ALERT_LEVEL
}

export const Alert: FunctionComponent<Props> = ({level = ALERT_LEVEL.SUCCESS, children}) => {
  return (
    <div className={`alert-box alert-level-${level}`}>
      { children }
    </div>
  )
}
