
// Esta funçao debounce previne muitas chamadas da funçao de animaçao
// conforme o usuario faz scroll. 
export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: any = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};


// Esta funçao ativa as animaçoes pegando cada item que esta visivel na tela. 
// conforme o usuario faz scroll com o mouse ou com os dedos no smartphone. 
// fiz por meio de javascript vanilla porem e possivel utilizar outras bibliotecas
export const animate = (target: any) => {
  const animateClass = "animate";
  function animeScroll() {
    const windowTop = window?.scrollY + (window?.innerHeight * 3) / 4;
    target.forEach((element: HTMLElement) => {
      if (windowTop > element.offsetTop) {
        element.classList.add(animateClass);
      } else {
        element.classList.remove(animateClass);
      }
    });
  }
  animeScroll();
  if (target.length) {
    return window.addEventListener(
      "scroll",
      debounce(() => animeScroll(), 200)
    );
  }
};
