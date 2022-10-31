let dropdownBtns = document.querySelectorAll('.dropdownBtn');

function displayDropdownContent(dropdownContent) {
    dropdownContent.style.display = 'flex';
    dropdownContent.style.flexDirection = 'column';
}

const keyframes = {
    rotateY : [ 
        {transform: 'rotateY(90deg)'},
        {transform: 'rotateY(-20deg)', offset : 0.8},
        {transform: 'rotateY(0deg)'}   
    ],
    scale : [ 
        {transform: 'scale(0)'},
        {transform: 'scale(1.2)', offset : 0.8},
        {transform: 'scale(1)'}   
    ],
    scaleDown :  [ 
        {transform: 'scaleY(0)'},
        {transform: 'scaleY(1)'}   
    ],
}

const availableAnimations = Object.keys(keyframes);

function getContentOrigin(selectedKeyframe) {
    switch (selectedKeyframe) {
        case 'rotateY':
        case 'scaleDown':
            return 'top center';
            break;
        default : 
            return 'center';
    }
}

function setContentOrigin(dropdownContent, selectedKeyframe) {
    dropdownContent.style.transformOrigin = getContentOrigin(selectedKeyframe)
}

const animationOptions = {
    duration : 300,
    iterations : 1,
    easing : 'ease-in-out'
}

function getAnimationKeyframe(animationStyle){
    let animationKey = Object.keys(keyframes).find(key => {
        return key === animationStyle;
    })
    return keyframes[animationKey];
}

function getAnimationStyle(dropdownContent) {
    let dropdownContentClassList = Array.from(dropdownContent.classList);
    const animationClassName = dropdownContentClassList.find(className => {
        
        availableAnimations.forEach(animation => {
            if (className === animation) {
                return className
            }
            return className
        })
    })
    console.log(animationClassName)
} 

function dropdownAnimate(animationStyle) {
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let dropdownContent = btn.getElementsByClassName('dropdown-content')[0];
            displayDropdownContent(dropdownContent);
            getAnimationStyle(dropdownContent);
            setContentOrigin(dropdownContent, animationStyle);
            dropdownContent.animate(getAnimationKeyframe(animationStyle), animationOptions);
        })
    })
}

dropdownAnimate('scale')