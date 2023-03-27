## What is this ?

Project inside the Odin Project's Full Stack JavaScript course.
To learn more about The Odin Project : https://www.theodinproject.com/

To learn more about the specific exercise : https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions

The goal is to create and publish a first npm package to apply various animations to dropdown menus very easily. Animation will be applied to the whole menu, not each item.

## Skills to practice

- Using the animate method
- Working with keyframes
- Working with the transform property
- Using export and set up / publish a npm package

## Installation
s
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

