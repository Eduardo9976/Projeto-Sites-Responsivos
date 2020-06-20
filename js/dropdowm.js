export default function initDropdown(){
  const dataMenu = document.querySelector('[data-dataMenu]')
  const dropDown = document.querySelector('[data-dropMenu]')

  const handleClick = (event) => {
    event.preventDefault()
    dropDown.classList.toggle('ativo')
    outSideClick(dropDown)
  }  

  function outSideClick(dropDown) {
    const html = document.documentElement
    if(!dropDown.classList.contains('ativo')) {
      html.addEventListener('click', handleOutSideClick)
      dropDown.classList.remove('ativo')
      dataMenu.removeEventListener('click', handleOutSideClick)
    }
    function handleOutSideClick(event) {
      if(!dropDown.contains(event.target)){
        dropDown.classList.remove('ativo')
      } 
    }
  }


  dataMenu.addEventListener('click', handleClick)


 
  











}

