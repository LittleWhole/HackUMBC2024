import React from 'react';
import { Suggestion } from '@/types';
import { Button } from '@/components/ui/button';


const Suggestions = ({ suggestions }) => {
    const actualSugg = [suggestions["content"]];
  console.log('Received suggestions:', suggestions);
  if (!suggestions || !Array.isArray(suggestions.content) || suggestions.content.length === 0) {
    return <div>No suggestions available</div>;
  }
  for (var i = 0; i < suggestions.length; i++) {
    actualSugg[i] = JSON.parse(suggestions["content"]);
  }
  console.log(actualSugg);
  return (
    <div className="flex-col my-8">
      <h3 className="text-3xl font-bold text-white mb-4">Suggestions</h3>
      {/*<ul className="w-full h-full text-white">
        {actualSugg[0][0].map((suggestion, index) => (
          <li key={index}>
            <p>{suggestion.content}</p>
            <small>{suggestion.rationale}</small>
          </li>
        ))}
      </ul>*/}
      <Button>{JSON.parse(actualSugg[0][0]["text"]).suggestions[0].content}</Button>
      <p className="mt-2">{JSON.parse(actualSugg[0][0]["text"]).suggestions[0].rationale}</p>
    </div>
  );
};

export default Suggestions;