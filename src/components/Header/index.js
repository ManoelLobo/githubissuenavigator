import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  flex: 1;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  background: #fff;
  height: 100px;
  padding: 30px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);

  select {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    background: #fff;
    height: 42px;
  }
`;

export const Repository = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    border-radius: 5px;
  }

  div.details {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 45px;
    padding: 2px 10px;

    .repo-name {
      font-weight: bold;
      flex: 1;
    }

    .repo-owner {
      font-size: 0.6rem;
      color: #999;
    }
  }
  button {
    border: 0;
    background: transparent;
    color: #ccc;
    font-size: 1rem;
  }
`;

export default () => (
  <Header>
    <Repository>
      <img src="https://placeimg.com/45/45/tech" alt="no" />
      <div className="details">
        <span className="repo-name">react</span>
        <span className="repo-owner">facebook</span>
      </div>
    </Repository>
    <select>
      <option>All issues</option>
      <option>Open issues</option>
      <option>Closed issues</option>
    </select>
  </Header>
);
