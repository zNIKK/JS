const texto = `
João Trouxe      flores para sua amada namorada em 10 de janeiro de 1970,
Maria era o nome dela.


Foi um ano excelente na vida de joão. Tebe 5 filhos , todos adultos atualmente, maria,hoje sua esposa. ainda faz aquele café com pão de queijo nas tardes de domingo. Também né! Sendo a boa mineira que é, nunca esquece seu famoso pão de queijo.
Não canso de ouvir Maria:
"Joooooooooooãooooooo, o café tá prontinho aqui. Veeemm"
`;

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Marido.png',
    'lista de compra.txt',
];

// <*>*</*>
const html = '<p>Olá mundo</p> <p>Olá de novo</p>'

const html2 = `<p 
class="teste teste" 
data-teste='teste'>
    Olá mundo
</p> 
<div>Sou uma div</div>`

const cpfs = `
Os CPFs são:
    254.224.877-45 
    214.978.456-12
    047.258.369-96
    982.523.452.67


    963.987.321-00
`;

const cpfs2 = `
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const ips = `
Os Ips são:
    0.0.0.0

    192.168.0.25

    10.10.5.12

    255.255.255.255
`;

const alfabeto = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ atenção abcdefghijklmnopqrstuvwxyz §◙³ 0123456789 ┴þ┴'

const lookahead = `
ONLINE 192.178.0.1 ABCDEF inative
OFFLINE 192.168.0.2 ABCDEF active
ONLINE 192.168.0.3 ABCDEF active
ONLINE 192.168.0.4 ABCDEF active
OFFLINE 192.168.0.5 ABCDEF active
OFFLINE 192.168.0.6 ABCDEF inative
`
module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    ips,
    cpfs,
    cpfs2,
    html2,
    lookahead,
}