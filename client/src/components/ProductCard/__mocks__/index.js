export const mockProduct = {
    id: 'MLA909922852',
    title: 'Apple iPhone 11 (128 Gb) - Negro',
    price: {
        currency: 'ARS',
        amount: 177800,
        decimals: 0,
    },
    picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
    condition: 'new',
    free_shipping: true,
    address: 'Capital Federal',
};

export const mockProductWithoutFreeShipping = {
    ...mockProduct,
    free_shipping: false,
};
