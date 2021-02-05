import React from 'react'
import s from './Search.module.css'

const Search = ({setInputText}: any) => {

    const inputTextHandler = (e: any) => {
        let inputText = e.target.value;
        setInputText(inputText)
    }

    return (
        <div className="search-wrap section-wrap section-wrap--middle">
            <div className={s.search}>
                <input
                    className={s.input}
                    type="text"
                    placeholder="Добавить задачу"
                    onChange={inputTextHandler}
                />
                <button
                    className={s.button}
                    type="button"
                >
                    Create
                </button>
            </div>
        </div>
    );
}

export default Search
