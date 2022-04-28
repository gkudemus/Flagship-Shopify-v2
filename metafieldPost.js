import fetch from 'node-fetch';

fetch('https://gkudemus-store.myshopify.com/admin/api/2022-04/products/6828405391499/metafields.json', {
    method: 'POST',
    headers: {
        'X-Shopify-Access-Token': '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',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'metafield': {
            'namespace': 'global',
            'key': 'test',
            'value': 1,
            'type': 'number_integer'
        }
    })
});