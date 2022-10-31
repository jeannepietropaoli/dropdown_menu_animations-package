const dropdownBtns = document.querySelectorAll('.dropdownBtn');

function displayDropdownContent(dropdownContent) {
  dropdownContent.style.display = 'flex';
  dropdownContent.style.flexDirection = 'column';
}

const keyframes = {
  rotateY: [
    { transform: 'rotateY(90deg)' },
    { transform: 'rotateY(-20deg)', offset: 0.8 },
    { transform: 'rotateY(0deg)' },
  ],
  scale: [
    { transform: 'scale(0)' },
    { transform: 'scale(1.2)', offset: 0.8 },
    { transform: 'scale(1)' },
  ],
  scaleDown: [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }],
  rotateX: [
    { transform: 'rotateX(90deg)' },
    { transform: 'rotateX(-20deg)', offset: 0.8 },
    { transform: 'rotateX(0deg)' },
  ],
};

function getContentOrigin(selectedKeyframe) {
  let origin;
  switch (selectedKeyframe) {
    case 'rotateY':
    case 'scaleDown':
    case 'scale':
    case 'rotateX':
      origin = 'top center';
      break;
    default:
      origin = 'center';
  }
  return origin;
}

function setContentOrigin(dropdownContent, selectedKeyframe) {
  dropdownContent.style.transformOrigin = getContentOrigin(selectedKeyframe);
}

const animationOptions = {
  duration: 300,
  iterations: 1,
  easing: 'ease-in-out',
};

function getAnimationKeyframe(animationStyle) {
  const animationKey = Object.keys(keyframes).find(
    (key) => key === animationStyle
  );
  return keyframes[animationKey];
}

function findCommonElement(array1, array2) {
  return array1.find((element) => array2.includes(element));
}

function getAnimationStyle(dropdownContent) {
  const dropdownContentClassList = Array.from(dropdownContent.classList);
  const availableAnimations = Object.keys(keyframes);
  return findCommonElement(dropdownContentClassList, availableAnimations);
}

function dropdownAnimateWholeMenu() {
  dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dropdownContent = btn.querySelector('.dropdown-content');
      const animationStyle = getAnimationStyle(dropdownContent);
      displayDropdownContent(dropdownContent);
      setContentOrigin(dropdownContent, animationStyle);
      dropdownContent.animate(
        getAnimationKeyframe(animationStyle),
        animationOptions
      );
    });
  });
}

export default dropdownAnimateWholeMenu;
