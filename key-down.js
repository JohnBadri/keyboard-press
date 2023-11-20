export function doKeyDown(keyEvent) {
  const keyDiv = document.querySelectorAll('.button');
  let keyInfo = {
    key: event.key,
    keyCode: event.keyCode,
    code: event.code,
  };

  const keyInfoValues = Object.values(keyInfo);

  keyDiv.forEach((item, index) => {
    item.textContent = keyInfoValues[index];
  });
}
