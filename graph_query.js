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

//transfers(where: { blockNumber: 16824740 }) {
//transfers(where: { blockNumber: 18988915 }) {
//transfers(where: { blockNumber: 18532510 }) {
//transfers(where: { blockNumber: 16902462 }) {

