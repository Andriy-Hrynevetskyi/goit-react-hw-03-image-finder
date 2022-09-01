import React, { Component } from 'react';
import {
  SearchbarStyled,
  FormStyled,
  SearchButtonStyled,
  SearchButtonLabel,
  SearchBtnSvg,
  InputStyled,
} from './Searchbar.styled';
import { Formik } from 'formik';
// import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  render() {
    return (
      <SearchbarStyled>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, actions) => {
            console.log(values);
            console.log(actions);
          }}
        >
          <FormStyled>
            <SearchButtonStyled type="submit">
              <SearchBtnSvg />
              <SearchButtonLabel>Search</SearchButtonLabel>
            </SearchButtonStyled>

            <InputStyled
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
            />
          </FormStyled>
        </Formik>
      </SearchbarStyled>
    );
  }
}
