import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex: 1;
  width: 320px;
  min-width: 320px;
  height: 100%;
  flex-direction: column;
  padding: 30px;
  box-shadow: 10px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const AddRepoForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  input {
    background: #eee;
    flex: 1;
    width: 100%;
    height: 42px;
    border: 0;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0 10px;
  }

  button {
    background: #369900;
    color: #fff;
    width: 42px;
    height: 42px;
    border: 0;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0 10px;
    margin-left: 10px;

    &:hover {
      background: #54992e;
    }
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
      font-size: 0.75rem;
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
