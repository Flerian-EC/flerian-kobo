document.title = "IEST";
//cambiar favicon:
function cambiarFavicon(rutaIcono) {

  let link = document.querySelector("link[rel~='icon']");
  
  if (!link) {

      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
  }

  link.href = rutaIcono;
}


//agregar enlace a IEST dentro de la pagina de registro: 

function addLinkToRegistrationBg() {

  const registrationBg = document.querySelector('.registration__bg');

  if (registrationBg) {

    const link = document.createElement('a');


    link.href = '#'; 
    link.textContent = 'Centro De Estudiantes Estadistica';
    link.className = 'flerian-a';
    link.style.color = 'white';


    registrationBg.appendChild(link);

  } else {
    console.log('No se encontró el elemento con la clase registration__bg');
  }
}

document.addEventListener('DOMContentLoaded', addLinkToRegistrationBg);