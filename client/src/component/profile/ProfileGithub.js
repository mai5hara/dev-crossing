/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card } from 'antd';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import {
  githubRepoCount,
  githubIcon,
  githubRepoListItem,
  githubRepoListContent,
  githubIconWrap,
  githubRepoDetails,
  profileGihub,
} from './ProfileGithub.style';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);
  return (
    <div css={profileGihub}>
      <h2>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <a
            css={githubRepoListItem}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card key={repo._id} hoverable>
              <div css={githubRepoListContent}>
                <div css={githubRepoDetails}>
                  <h4>{repo.name}</h4>
                  <p>{repo.description}</p>
                </div>
                <div css={githubIconWrap}>
                  <ul>
                    <li>
                      <span css={githubIcon}>
                        <i className="far fa-star"></i>
                      </span>
                      <span css={githubRepoCount}>{repo.stargazers_count}</span>
                      Stars
                    </li>
                    <li>
                      <span css={githubIcon}>
                        <i className="far fa-eye"></i>
                      </span>
                      <span css={githubRepoCount}>{repo.watchers_count}</span>
                      Watchers
                    </li>
                    <li>
                      <span css={githubIcon}>
                        <i className="fas fa-code-branch"></i>
                      </span>
                      <span css={githubRepoCount}>{repo.forks_count}</span>Forks
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </a>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
