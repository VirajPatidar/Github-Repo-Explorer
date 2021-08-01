import React from 'react';
import { getRepo } from '../../src/services/githubService';
import styles from './repo.module.scss';
import ButtonLink from '../../src/components/button-link';
import UserAvatar from '../../src/components/user-avatar';

const Repo = ({ repo }) => {
    return (
        <div>

            <div className={styles.header}>
                <span>{repo.name}</span>
            </div>
            <UserAvatar user={repo.owner}></UserAvatar>
            <div className={styles.description}>{repo.description}</div>
            <div className={styles.language}>{repo.language}</div>

            <ButtonLink
                href={repo.html_url}
                text="View on Github"
                type="dark"
                target="_blank"
                external
            />
            <ButtonLink href="/" text="Back" />
        </div>
    );
};

export const getServerSideProps = async ({ query }) => {
    const res = await getRepo(query.id);
    return {
        props: { repo: res.data }
    };
};

export default Repo;
