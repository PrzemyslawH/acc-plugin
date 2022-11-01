function toggleSidebar() {
  const sidebar = document.querySelector('.w4a-sidebar');
  sidebar.classList.toggle('w4a-sidebar--open');
}

function toggleActive(el) {
  const button = el.closest('.w4a-group__buttons').querySelectorAll('.w4a-btn');

  button.forEach((item) => item.classList.remove('w4a-btn--active'));
  el.classList.add('w4a-btn--active');
}

// Theme mode

function lightContrast(el) {
  toggleActive(el);
}

function darkContrast(el) {
  toggleActive(el);
}

function lowSaturation(el) {
  toggleActive(el);
}

function highSaturation(el) {
  toggleActive(el);
}

function monochrome(el) {
  toggleActive(el);
}

function invertColors(el) {
  toggleActive(el);
}

// Readability options

function highlightHeadings(el) {
  toggleActive(el);
}

function highlightLinks(el) {
  toggleActive(el);
}

function screenReader(el) {
  toggleActive(el);
}

function readMode(el) {
  toggleActive(el);
}

function bigCursor(el) {
  toggleActive(el);
}

function hideImages(el) {
  toggleActive(el);
}

// Letter spacing

function letterSpacingSmall(el) {
  toggleActive(el);
}

function letterSpacingMedium(el) {
  toggleActive(el);
}

function letterSpacingLarge(el) {
  toggleActive(el);
}

function letterSpacingXLarge(el) {
  toggleActive(el);
}

// Text size

function textSizeSmall(el) {
  toggleActive(el);
}

function textSizeMedium(el) {
  toggleActive(el);
}

function textSizeLarge(el) {
  toggleActive(el);
}

function textSizeXLarge(el) {
  toggleActive(el);
}

// Word spacing

function wordSpacingSmall(el) {
  toggleActive(el);
}

function wordSpacingMedium(el) {
  toggleActive(el);
}

function wordSpacingLarge(el) {
  toggleActive(el);
}

function wordSpacingXLarge(el) {
  toggleActive(el);
}
