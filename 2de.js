let verstuur = document.querySelector('.push')
let main = document.querySelector('.mainpart')
let water = document.querySelector('.regentonvol')
let opwater = document.querySelector('.watereffectvol')

verstuur.addEventListener('click', opvullen)
{
  water.classList.toggle('verstopt')
}
