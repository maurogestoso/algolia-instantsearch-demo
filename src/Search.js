import React from 'react';
import {InstantSearch, Hits, SearchBox, Highlight, RefinementList} from 'react-instantsearch/dom';

const Search = () => (
  <div className="container">
    <SearchBox />
    <RefinementList attributeName="category" />
    <Hits hitComponent={Product} />
  </div>
);

const Product = ({hit}) => (
  <div style={{marginTop: '10px'}}>
    <span className="hit-name">
      <Highlight attributeName="name" hit={hit} />
    </span>
  </div>
)

export default Search;