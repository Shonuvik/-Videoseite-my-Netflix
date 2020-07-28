import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function NewVideo() {
    return(
      <PageDefault>
       <h1>Cadastro de Categorias</h1>



        <Link to="/cadastro/categoria">
            Cadastrar categoria
        </Link>
      </PageDefault>
    )
  }

  export default NewVideo;