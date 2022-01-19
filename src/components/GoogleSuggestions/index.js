// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ' '}

  onUpdateSearch = value => {
    this.setState({searchInput: value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestion-container">
          <img
            className="google-logo"
            alt=" google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          />
          <div className="search-input-suggestion-container">
            <div className="search-input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                onChange={this.onSearchInput}
                placeholder="Search Google"
                className="search-input"
                type="search"
                value={searchInput}
              />
            </div>
            <ul className="suggestion-container">
              {searchResults.map(eachSuggestions => (
                <SuggestionItem
                  key={eachSuggestions.id}
                  suggestionsListDetails={eachSuggestions}
                  onUpdateSearch={this.onUpdateSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
