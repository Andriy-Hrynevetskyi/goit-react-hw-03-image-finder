import React, { Component } from 'react';
import { SearchbarHeader } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {};
  render() {
    return (
      <SearchbarHeader>
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchbarHeader>
    );
  }
}
