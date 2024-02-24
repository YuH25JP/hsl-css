import styled from 'styled-components'

export const ColorBox = styled.div<{ $colorInHex: string; }>`
background: ${props => props.$colorInHex}
`
