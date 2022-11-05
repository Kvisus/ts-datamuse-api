const URL = `https://api.datamuse.com`;

export const fetchSynonyms = (word: string) => {
  return fetch(`${URL}/words?rel_syn=${word}`).then((response) =>
    response.json()
  );
};
