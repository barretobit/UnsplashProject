import React, { useState } from "react";
import { createApi } from 'unsplash-js';
import { DecypherAccess } from './Utils/cypherUtils';
import InputComplete from "./Components/InputComplete"
import "./Components/InputComplete.css";

const unsplash = createApi({
    accessKey: DecypherAccess()
});

export default function SearchPhotos() {

    const [history, setHistory] = useState([]);

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    function saveHistorySearch(string) {

        if (!history.includes(string)) {
            setHistory(history => [...history, query])
        }
        else {
            //dont add
        }
    }

    const searchPhotos = async (e) => {
        e.preventDefault();

        saveHistorySearch(query);

        console.log(history);

        unsplash.search.getPhotos({
            query: query,
            page: 1,
            perPage: 15,
            orientation: 'portrait',
        }).then(result => {
            setPics(result)
        })
    };


    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                    {""}
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={"Search free high-resolution photos"}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <InputComplete suggestions={history} />
                <br></br>
                <button type="submit" className="button">
                    Search
                </button>
            </form>
            <div className="card-list">
                {
                    pics?.response?.results?.map((pic) =>
                        <div className="card" key={pic.id}>
                            <img
                                className="card--image"
                                alt={pic.alt_description}
                                src={pic.urls.full}
                                width="50%"
                                height="50%"
                            >
                            </img>
                        </div>)
                }
            </div>
        </>
    );
}