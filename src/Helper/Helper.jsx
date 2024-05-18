export const setBodyColor = ({ color }) => {
  document.documentElement.style.setProperty("--bodyColor", color);
};

export const setButtonColor = ({ color }) => {
  document.documentElement.style.setProperty("--buttonColor", color);
};

export function debounce(callback, wait, immediate) {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    !timeoutId && immediate && callback(...args);
    timeoutId = window.setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, wait);
  };
}

export const setNavbarBackground = ({ color }) => {
  document.documentElement.style.setProperty("--NavColor", color);
};
