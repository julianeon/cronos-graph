const infoQuery = {
  query: `
  {
    infos {
      id
      summary
      description 
      title
      license
    }
  }
`
};

module.exports = infoQuery;


