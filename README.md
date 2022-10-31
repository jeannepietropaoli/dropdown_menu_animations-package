#what is this ?

Apply various animations to your dropdown menus very easily. Animation will be applied to the whole menu, not each item.

#installation //
npm install --save-dev dropdown_menu_animations

    Then...

    ```
    import { dropdownAnimateWholeMenu } from 'dropdown_menu_animations';

    dropdownAnimateWholeMenu();
    ```
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

position: absolute;
top: 100%; /_ Sets the top position in % of the height of the parent element, so 100% after the top of the parent, so directly below it _/
left: 0;
width: 100%;
