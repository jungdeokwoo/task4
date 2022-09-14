import { css } from 'styled-components'

const theme = {
  border: '#717171',

  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  absolute: (top = 'none', right = 'none', bottom = 'none', left = 'none') => `
    position : absolute;
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `,

  headerFont: css`
    font-size: 32px;
    font-weight: 700;
  `,

  titleFont: css`
    font-size: 24px;
    font-weight: 500;
  `,

  normalFont: css`
    font-size: 16px;
    font-weight: 400;
  `,
}

export default theme
