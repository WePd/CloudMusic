import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background: #242424;

  .headerItem {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divder{
    height: 5px;
    background: #c20c2c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  a {
    display: block;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    background-position: 0 0;
  }
  .select-list {
    display: flex;
    line-hight: 70px;
    
  }
`
export const HeaderRight = styled.div`


`