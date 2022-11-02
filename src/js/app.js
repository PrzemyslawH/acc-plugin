function toggleSidebar() {
  const sidebar = document.querySelector('.w4a-sidebar');
  sidebar.classList.toggle('w4a-sidebar--open');
}

const activateOneOption = (el) => {
  const buttons = el
    .closest('.w4a-group__buttons')
    .querySelectorAll('.w4a-btn');

  el.classList.contains('w4a-btn--active')
    ? el.classList.remove('w4a-btn--active')
    : (buttons.forEach((item) => item.classList.remove('w4a-btn--active')),
      el.classList.add('w4a-btn--active'));
};

const activateManyOptions = (el) => {
  el.classList.toggle('w4a-btn--active');
};

// Reset

const resetOptions = () => {
  const allButtons = document.querySelectorAll('.w4a-sidebar .w4a-btn');

  allButtons.forEach((item) => item.classList.remove('w4a-btn--active'));
};

const btnReset = document.querySelector('#w4a-reset');
btnReset.addEventListener('click', function () {
  resetOptions();
});

// Theme mode

const btnLightContrast = document.querySelector('#w4a-light-contrast');
btnLightContrast.addEventListener('click', function () {
  activateOneOption(this);
});

const btnDarkContrast = document.querySelector('#w4a-dark-contrast');
btnDarkContrast.addEventListener('click', function () {
  activateOneOption(this);
});

const btnLowSaturation = document.querySelector('#w4a-low-saturation');
btnLowSaturation.addEventListener('click', function () {
  activateOneOption(this);
});

const btnHighSaturation = document.querySelector('#w4a-high-saturation');
btnHighSaturation.addEventListener('click', function () {
  activateOneOption(this);
});

const btnMonochrome = document.querySelector('#w4a-monochrome');
btnMonochrome.addEventListener('click', function () {
  activateOneOption(this);
});

const btnInvertColors = document.querySelector('#w4a-invert-colors');
btnInvertColors.addEventListener('click', function () {
  activateOneOption(this);
});

// Readability options

const btnHighlightHeadings = document.querySelector('#w4a-highlight-headings');
btnHighlightHeadings.addEventListener('click', function () {
  activateManyOptions(this);
});

const btnHighlightLinks = document.querySelector('#w4a-highlight-links');
btnHighlightLinks.addEventListener('click', function () {
  activateManyOptions(this);
});

const btnScreenReader = document.querySelector('#w4a-screen-reader');
btnScreenReader.addEventListener('click', function () {
  activateManyOptions(this);
});

const btnReadMode = document.querySelector('#w4a-read-mode');
btnReadMode.addEventListener('click', function () {
  activateManyOptions(this);
});

const btnBigCursor = document.querySelector('#w4a-big-cursor');
btnBigCursor.addEventListener('click', function () {
  activateManyOptions(this);
});

const btnHideImages = document.querySelector('#w4a-hide-images');
btnHideImages.addEventListener('click', function () {
  activateManyOptions(this);
});

// Letter spacing

const btnLetterSpacingS = document.querySelector('#w4a-letter-spacing-s');
btnLetterSpacingS.addEventListener('click', function () {
  activateOneOption(this);
});

const btnLetterSpacingM = document.querySelector('#w4a-letter-spacing-m');
btnLetterSpacingM.addEventListener('click', function () {
  activateOneOption(this);
});

const btnLetterSpacingL = document.querySelector('#w4a-letter-spacing-l');
btnLetterSpacingL.addEventListener('click', function () {
  activateOneOption(this);
});

const btnLetterSpacingXL = document.querySelector('#w4a-letter-spacing-xl');
btnLetterSpacingXL.addEventListener('click', function () {
  activateOneOption(this);
});

// Text size

const btnTextSizeS = document.querySelector('#w4a-text-size-s');
btnTextSizeS.addEventListener('click', function () {
  activateOneOption(this);
});

const btnTextSizeM = document.querySelector('#w4a-text-size-m');
btnTextSizeM.addEventListener('click', function () {
  activateOneOption(this);
});

const btnTextSizeL = document.querySelector('#w4a-text-size-l');
btnTextSizeL.addEventListener('click', function () {
  activateOneOption(this);
});

const btnTextSizeXL = document.querySelector('#w4a-text-size-xl');
btnTextSizeXL.addEventListener('click', function () {
  activateOneOption(this);
});

// Word spacing

const btnWordSpacingS = document.querySelector('#w4a-word-spacing-s');
btnWordSpacingS.addEventListener('click', function () {
  activateOneOption(this);
});

const btnWordSpacingM = document.querySelector('#w4a-word-spacing-m');
btnWordSpacingM.addEventListener('click', function () {
  activateOneOption(this);
});

const btnWordSpacingL = document.querySelector('#w4a-word-spacing-l');
btnWordSpacingL.addEventListener('click', function () {
  activateOneOption(this);
});

const btnWordSpacingXL = document.querySelector('#w4a-word-spacing-xl');
btnWordSpacingXL.addEventListener('click', function () {
  activateOneOption(this);
});
