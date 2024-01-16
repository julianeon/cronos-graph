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

//could also use transactionHash: "0x43185dd560cbcc4d7201af33b905df8e2ef7475dd63882c84559bc3422d981e4" 

