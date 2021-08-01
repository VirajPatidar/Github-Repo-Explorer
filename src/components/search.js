import React from 'react';
import TextInput from './text-input';
import Select from './select';

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
        <div>
            <TextInput
                label="Repo Search"
                value={searchText}
                onChange={(value) => onSearchTextChange(value)}
            />
            <Select
                label="Language"
                value={language}
                options={languages}
                onChange={(value) => onLanguageChange(value)}
            />
        </div>
    );
};

export default Search;