// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionsListDetails, onUpdateSearch} = props
  const {suggestion} = suggestionsListDetails

  const onSelectSuggestion = () => {
    onUpdateSearch(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestions-text">{suggestion}</p>
      <button
        type="button"
        onClick={onSelectSuggestion}
        className="arrow-button"
      >
        <img
          alt="arrow"
          className="arrow-logo"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
