// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g

// Elimina tudo que não for números
const naoNumerosRegEx =  /\D/

// Valida IP

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d))/g;

const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida Telefones
const telRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm

// Valida Senhas fortes
const senhasFortesRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%¨%&\*\(\)\]\[\{\}]]).{8,}/gm;

const emailsRegExp = /[^\s\.]\.?[^\s\.]+@[^\s]+\.[^\s]+\w+/gm

// analiza todos os emails possíveis
// /[^\s]+@[^\s]+\.[^\s]+(\w+)*/gm (permissiva)

// /[^\s\.]\.?[^\s\.]+@[^\s]+\.[^\s]+\w+/gm