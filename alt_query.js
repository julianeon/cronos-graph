const graphqlQuery = {
  query: `
{
  transfers(where: { blockNumber: 16940391 }) {
    id
    from
    to
    value
    blockNumber
    blockTimestamp
    transactionHash
  }
}
  `
};

module.exports = graphqlQuery;
