let revealElementos = document.querySelectorAll('.reveal');

    function mostrarElementos() {
      let scrollTop = document.documentElement.scrollTop;

      for (let i = 0; i < revealElementos.length; i++) {
        let alturaAnimado = revealElementos[i].offsetTop;
        if (alturaAnimado - 500 < scrollTop) {
          revealElementos[i].style.opacity = 1;
          revealElementos[i].classList.add('moverArriba');
        }
      }
    }

window.addEventListener('scroll', mostrarElementos);