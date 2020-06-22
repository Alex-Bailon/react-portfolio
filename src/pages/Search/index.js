import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import ArticleContext from '../../utils/ArticleContext'

function Search() {
  const [data, setData] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  })

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!data.search) {
      return;
    }

    API.searchTerms(data.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setData({ ...data, title: res.data[1][0]});
        setData({ ...data, url: res.data[3][0]});
      })
      .catch(err => setData({...data, error: err }));
  }, [data.search]);

  const handleInputChange = event => {
    setData({...data, search: event.target.value});
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
  <ArticleContext.Provider value = {data}>
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: data.error ? 1 : 0, marginBottom: 10 }}>
          {data.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={data.search}
        />
        <SearchResults />
      </Container>
    </div>
  </ArticleContext.Provider>
  );
}

export default Search;
