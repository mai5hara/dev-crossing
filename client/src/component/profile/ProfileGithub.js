/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Card } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { profileSelector } from '../../store/features/profileSlice'
import { getGithubRepos } from '../../store/apiCalls/profile';
import Spinner from '../layout/Spinner';
import {
  githubRepoCount,
  githubIcon,
  githubRepoListItem,
  githubRepoListContent,
  githubIconWrap,
  githubRepoDetails,
} from './ProfileGithub.style';

const ProfileGithub = ({ username }) => {
  const dispatch = useDispatch();
  const { repos, loading, error } = useSelector(profileSelector)

  const notify = (message) =>
  toast.error(message, {
    theme: 'colored',
    position: 'top-center',
    toastId: 'profileGithub'
  })

  if(error) {
    notify(error?.msg)
  }

  useEffect(() => {
    dispatch(getGithubRepos(username));
  }, [dispatch, username]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : !loading && (!repos || repos.length === 0) ? (
        <p>No github Repos</p>
      ) : (
        repos?.map((repo, index) => (
          <a
            css={githubRepoListItem}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
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

export default ProfileGithub;
