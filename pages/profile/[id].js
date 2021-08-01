import React from 'react';
import { getProfile } from '../../src/services/githubService';
import styles from './profile.module.scss';
import ButtonLink from '../../src/components/button-link';

const Profile = ({ profile }) => {
    return (
        <div>

            <h3 className="is-size-3">{profile.name}</h3>
            <br />
            {profile.bio && <div className={styles.text}>{profile.bio}</div>}
            {profile.email && <div className={styles.text}>{profile.email}</div>}
            {profile.blog && <div className={styles.text}>{profile.blog}</div>}
            {profile.location && (
                <div className={styles.text}>{profile.location}</div>
            )}

            <div className={styles.counters}>
                {profile.followers !== 0 && <div>Followers: {profile.followers}</div>}
                {profile.following !== 0 && <div>Following: {profile.following}</div>}
            </div>

            <ButtonLink
                href={profile.html_url}
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
    const res = await getProfile(query.id);
    return {
        props: { profile: res.data }
    };
};

export default Profile;
