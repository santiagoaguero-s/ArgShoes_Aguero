export const getProductsAsync = () => {
    return fetch( 'https://app.retailed.io/api/v1/db/prices/6599a994ba1b34fbe455bef1').then((res) => res.json())
  } 