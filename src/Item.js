import React from 'react';
import styled from 'styled-components'

const Item = () => {
    const desc = 'サンプル'

    return (
        <ItemWrapper>
            <p>{desc}</p>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    background-color: gray;
`

export default Item