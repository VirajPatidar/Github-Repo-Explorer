import React from 'react';
import TextInput from './text-input';
import Select from './select';
import styles from './search.module.scss';

const Search = (props) => {
    const { language, searchText, onSearchTextChange, onLanguageChange } = props;

    const LANGUAGES = [
        { value: 'csharp#', label: 'C#' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'go', label: 'Go' },
        { value: 'php', label: 'PHP' },
        { value: 'cpp', label: 'C++' },
        { value: 'java', label: 'Java' },
        { value: 'python', label: 'Python' },
        { value: 'typescript', label: 'TypeScript' }
    ];

    const languages = [{ value: '', label: 'All' }, ...LANGUAGES];

    return (
        <div className={styles.search}>
            <TextInput
                className={styles.searchInput}
                label="Repo Search"
                value={searchText}
                placeholder="name or description"
                onChange={(value) => onSearchTextChange(value)}
            />
            <Select
                className={styles.languageSelect}
                label="Language"
                value={language}
                options={languages}
                onChange={(value) => onLanguageChange(value)}
            />
        </div>
    );
};

export default Search;