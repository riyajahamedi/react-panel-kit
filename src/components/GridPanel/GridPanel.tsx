import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

export const GridItem = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
`
