import React, { useState, useEffect } from 'react';
import { Suggestion } from '@/types';

const Suggestions = (suggestions: Suggestion[]) => {
  return (
    <div>
      <h3>Suggestions</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <p>{suggestion.content}</p>
            <small>{suggestion.rationale}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;