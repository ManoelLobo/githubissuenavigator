import React from 'react';
import { Container, AddRepoForm, Repository } from './styles';

const SideBar = () => (
  <Container>
    <AddRepoForm>
      <input placeholder="Repo name" />
      <button type="submit">
        <span className="fa fa-plus-circle" />
        <span className="sr">Add Repo</span>
      </button>
    </AddRepoForm>
    <Repository>
      <img alt="repo" src="https://placeimg.com/64/64/tech" />
      <div className="details">
        <span className="repo-name">repo-name</span>
        <span className="repo-owner">repo company</span>
      </div>
      <button type="button">
        <span className="fa fa-chevron-right" />
        <span className="sr">View Issues</span>
      </button>
    </Repository>
    <Repository>
      <img alt="repo" src="https://placeimg.com/64/64/tech" />
      <div className="details">
        <span className="repo-name">repo-name</span>
        <span className="repo-owner">repo company</span>
      </div>
      <button type="button">
        <span className="fa fa-chevron-right" />
        <span className="sr">View Issues</span>
      </button>
    </Repository>
  </Container>
);

export default SideBar;
