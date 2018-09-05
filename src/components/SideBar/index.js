import React from 'react';
import { Container, AddRepoForm, Repository } from './styles';
import api from '../../services/api';

class SideBar extends React.Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    const { repositories, repositoryInput } = this.state;

    if (repositoryInput.length === 0) return;
    if (repositories.some(repo => repo.full_name.toLowerCase() === repositoryInput.toLowerCase())) {
      return;
    }

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositories: [...repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false, repositoryInput: '' });
    }
  };

  render() {
    const {
      repositories, repositoryInput, loading, repositoryError,
    } = this.state;
    return (
      <Container>
        <AddRepoForm onSubmit={this.handleAddRepository}>
          <input
            className={repositoryError ? 'error' : ''}
            type="text"
            placeholder="User/Repo name"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? (
              <span className="fa fa-spinner fa-pulse" />
            ) : (
              <span className="fa fa-plus-circle" />
            )}
            <span className="sr">Add Repo</span>
          </button>
        </AddRepoForm>
        {repositories.length === 0 ? (
          <span className="instruction">Type a repository [owner/repository] to add to list</span>
        ) : (
          ''
        )}
        {repositories.map(repo => (
          <Repository key={repo.id}>
            <img alt={`${repo.name} by ${repo.owner.login}`} src={repo.owner.avatar_url} />
            <div className="details">
              <span className="repo-name">{repo.name}</span>
              <span className="repo-owner">{repo.owner.login}</span>
            </div>
            <button type="button">
              <span className="fa fa-chevron-right" />
              <span className="sr">View Issues</span>
            </button>
          </Repository>
        ))}
      </Container>
    );
  }
}

export default SideBar;
