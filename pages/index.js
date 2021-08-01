import React from 'react';
// import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../src/components/search';
import { searchRepos } from '../src/services/githubService';
import RepoList from '../src/components/repo-list';
// import styles from './index.module.scss'; 

const Index = (props) => {
    const [searchText, setSearchText] = useState('');
    const [language, setLanguage] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSearchTextChange = (text) => {
        setSearchText(text);
        if (text) {
            loadRepos(text, language);
        }
    };

    const onLanguageChange = (language) => {
        setLanguage(language);
        loadRepos(searchText, language);
    };

    const loadRepos = async (searchText, language) => {
        setLoading(true);
        const res = await searchRepos(searchText, language);
        if (res && res.data) {
            setLoading(false);
            setRepos(res.data.items);
        }
    };

    return (
        <div>
            <Search
                searchText={searchText}
                language={language}
                onSearchTextChange={onSearchTextChange}
                onLanguageChange={onLanguageChange}
            />
            <RepoList loading={loading} repos={repos} />
        </div>
    );
};

export default Index;