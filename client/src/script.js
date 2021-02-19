import { div, get, a, img, span } from './utils';

get().then((data) => {
  const app = document.getElementById('app');
  let currentSlide = 0;

  let cards, dots;

  const setActualSlide = (index) => {
    cards.forEach((card) => card.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  };

  const wrapper = div({
    classNames: ['slideshow-container'],
    children: [
      a({
        classNames: ['prev'],
        listeners: {
          click: () => setActualSlide(!currentSlide ? 0 : currentSlide - 1),
        },
        children: ['❮'],
      }),
      a({
        classNames: ['next'],
        listeners: {
          click: () =>
            setActualSlide(
              currentSlide === data.length - 1
                ? data.length - 1
                : currentSlide + 1
            ),
        },
        children: ['❯'],
      }),
      ...(cards = data.map((user, i) =>
        div({
          classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
          children: [
            div({
              classNames: ['numbertext'],
              children: [`${i + 1}/${data.length}`],
            }),
            img({
              classNames: ['slider-image'],
              src: '',
            }),
            div({
              classNames: ['card__header'],
              children: [user.name],
            }),
            div({
              classNames: ['card__body'],
              children: [user.level],
            }),
          ],
        })
      )),
    ],
  });

  const dotsWrapper = div({
    classNames: ['dots-wrapper'],
    children: (dots = data.map((_, i) =>
      span({
        classNames: ['dot', !i ? 'active' : 'not-active'],
        listeners: {
          click: () => setActualSlide(i),
        },
      })
    )),
  });

  app.append(wrapper);
  app.append(dotsWrapper);
});
