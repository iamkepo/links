const baseURL = 'http://localhost:5001/api/public/visite';

const instance = axios.create({baseURL});

window.addEventListener('load', (e_load)=> {
  // console.log(window);

  // init('/bouffe.com', (response)=> {
  //   console.log(response)
  // })

  // reWriteLinks()
})

async function init(param, callback) {
  callback((await (await fetch(baseURL+'/get'+param)).text()))
}
async function initsite(param, callback) {
  instance.post('/post', param).then((response) => {
    callback(response.data)
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
function getclick(param) {
  console.log(param.innerText);
  window.location.assign(param.href.split('#')[1])
}
function reWriteLinks() {
  let links = document.querySelectorAll('a');
  let data = []
  links.forEach((link)=> {
    link.setAttribute('onclick', 'getclick(this)')
    link.href = '#'+link.href;
    data.push(link.innerText.replaceAll(' ', ('_')))
  })

  initsite(data,(response)=> {
    console.log(response)
  })
}