import React from 'react';
import { Container, AddRepoForm } from './styles';

const SideBar = () => (
  <Container>
    <AddRepoForm>
      <input placeholder="Repo name" />
      <button type="button">
        <span className="fa fa-plus-circle" />
      </button>
    </AddRepoForm>
  </Container>
);

export default SideBar;
