import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  
`;


export default function PageDefault({children}) {
    return(
        //o props.children foi utilizado para pegar todo o conteudo dentro
        //do menu e do footer
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}