export default function initDropdown(){
  const dataMenu = document.querySelector('[data-dataMenu]')
  const dropDown = document.querySelector('[data-dropMenu]')
  const html = document.documentElement

  const handleClick = (event) => {
    event.preventDefault()
    if(dataMenu == event.target){
      dropDown.classList.toggle('ativo')
    }
    else {
      dropDown.classList.remove('ativo')
    }
  }  

  html.addEventListener('click', handleClick)


 
  











}

