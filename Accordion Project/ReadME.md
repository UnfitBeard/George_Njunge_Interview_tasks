# The results of the laptop and mobile designs.
![PC Design](outputs/pcdesign.png)
![Mobile Design](outputs/mobiledesign.png)
![OnHover](outputs/hover.png)
![Expanded](outputs/expanded.png)

# Implementation of ARIA Roles
**role="heading"** and **aria-controls="h1"** on headline.

**role="heading"**: Identifies the element as a heading for screen readers.
**aria-controls="h1"**: Indicates that this element controls another element, which helps users understand relationship.

**aria-expanded** on buttons to indicate whether button is expanded or is collapsed.

**aria-controls** on buttons to link button to the div it controls.

**role=region** identifies the description as a landmark region and **aria-labelledby** on descriptions links the button with its controlling region.

**aria-hidden** on descriptions indicates whether region is visible or hidden.

# Keyboard Accessibility 
Use of **Enter** or **Space** to toggle i.e to collapse or expand accordion items.
Use of **Arrow Up** ,**Arrow down** and **Tab key** for navigation.

