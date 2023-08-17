import { FC } from 'react'
import { css } from '../../styled-system/css'

const EmphasizedText:FC<React.HTMLAttributes<HTMLElement>> = ({children}) => {

  return <em className={css({
    color: 'page.headingHighlightColor',
    fontStyle: 'normal',
  })}>
    {children}
  </em>
}

export default EmphasizedText