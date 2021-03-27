// file containing functions that are usefull in various componets
// made in order to avoid repetitions

export const bookAuthors = authors => {
    if(authors)
    {
    if (authors.length <= 2) {
      authors = authors.join(' and ');
    } else if (authors.length > 2) {
      let lastAuthor = ' and ' + authors.slice(-1);
      authors.pop();
      authors = authors.join(', ');
      authors += lastAuthor;
    }
    return authors;
   }
   else
   {
     return "Unknown";
   }
  };