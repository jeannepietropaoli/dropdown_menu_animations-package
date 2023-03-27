## What is this ?

Apply various animations to your dropdown menus very easily. Animation will be applied to the whole menu, not each item.

## Installation

npm install --save-dev dropdown_menu_animations

Then...

    import { dropdownAnimateWholeMenu } from 'dropdown_menu_animations';

    dropdownAnimateWholeMenu();

Then...

Add the class of your choice between 'rotateY' / 'rotateY' / 'scale' / 'scaleDown' to each dropdown container, depending on the animation you want to apply to your dropdown. Every dropdown can then have a different animation.

    <div class="dropdownBtn">
      Menu
      <div class="dropdown-container rotateY">
        <a href="" class="list-item-1">Home</a>
        <a href="" class="list-item-2">Contact</a>
        <a href="" class="list-item-3">More</a>
        <a href="" class="list-item-4">Infos</a>
      </div>
    </div>

The dropdown-containers elements must have their css display property set to none :

    .dropdown-container {
        display : none;
    }
