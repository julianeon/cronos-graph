const graphqlQuery = {
  query: `
{
  transfers(where: { transactionHash: "0xc3bd871c02230745873918d98d5003883bb7b56fe5e14cc33cccb0c9fbbd1be9" }) {
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

//transfers(where: { blockNumber: 16824740 }) {
//transfers(where: { blockNumber: 18988915 }) {
//transfers(where: { blockNumber: 18532510 }) {
//transfers(where: { blockNumber: 16902462 }) {

