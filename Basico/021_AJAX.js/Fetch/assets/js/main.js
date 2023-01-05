document.addEventListener('click', e => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(element)
  }
});

async function carregaPagina(element) {
  try {
    const href = element.getAttribute('href')
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('ERRO 404!')

    const html = await response.text();
    carregaResultado(html);
  } catch(err) {
    console.log(err);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;

}


// fetch('pagina3.html', {})
//   .then(resposta => {
//     if (resposta.status !== 200) throw new Error("ERRO 404 NOSSO");
//     return resposta.text();
//   })
//   .then(html => console.log(html))
//   .catch(err => console.log(err))