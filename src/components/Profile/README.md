#WorkPi Assessment Data Profile

*Patryk Jachimowski*

##1. Technology used
* Language: Typescript
* Styling: Scss (with use of pre-existing styles from workpi.scss)


##2. Component Structure

* Components built with single responsibility principle
* Styling kept inside scss files (with global class definitions)
* Put each component is in its own directory with scss and stories files coresponding to it

The entire project is incorporated within higher order component - SidePane.tsx, which sits directly in App.tsx. This ensures unidirectional data flow.
**SIDE PANE:**
The section can be divided into 3 subsections:
- Personal Information
- Top Skills Enneagram
- Development Skills

(each of those screenblocks in wrapped in **PaneWrapper** component which provides different styling for mobile and desktop view)

Side Pane is fitted with button which hides the pane to the left. This toggle button changes in mobile version for better user experience.

**PERSONAL INFO:**





