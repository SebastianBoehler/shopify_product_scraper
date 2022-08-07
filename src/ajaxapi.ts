import fetch from 'isomorphic-fetch';

test()
async function test() {
    const baseURL = 'https://www.waterdrop.de'
    const respProducts = await fetch(baseURL + '/products.json')
    const products = await respProducts.json()
    console.log(products)

    if (products['products'].length > 0) {
        await fetch(baseURL + `/products/${products['products'][0]['handle']}.js`)
    }
}