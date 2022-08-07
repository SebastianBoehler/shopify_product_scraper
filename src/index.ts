import fetch from 'isomorphic-fetch';

const storefrontToken = 'd5b43319bc8c6d33faabded50f19bebb'

test()

async function test() {
    const query = `query {
    products (first: 10) {
      edges {
        node {
          id
          title
          descriptionHtml
          }
        }
      }
    }`

    const resp = await fetch('https://waterdrop-us.myshopify.com/api/2022-07/graphql.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': storefrontToken
        },
        body: query
    })

    console.log(resp.status, await resp.text())
}