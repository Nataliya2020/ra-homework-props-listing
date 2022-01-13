export default function getCode(currency, {price}) {
  let code;

  if(currency.currency_code === "USD") {

    code = `$ ${price}`;
  }else if(currency.currency_code === 'EUR') {
    code = `€ ${price}`;
  }else {
    code = `${price} ${currency.currency_code }`;
  }

  return code;
}

export function getQuantity({quantity}) {

  if(quantity > 20) {
    return 'level-high';
  }

  if(quantity <= 20 && quantity > 10) {
    return 'level-medium';
  }

  if(quantity <= 10) {
    return 'level-low';
  }
}
