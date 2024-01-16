const graphqlQuery = {
  query: `
{
  transfers(where: { transactionHash: "0x0000000" }) {
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
