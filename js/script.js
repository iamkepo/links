

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
}