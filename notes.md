### Questions

- why does props in Button.js works with arrow function but not directly????

### About Designs

- Animations
  - intentional (user's attention, time sensitive components)
  - accessible (html element/attr or WAI-ARIA counterparts)
  - performance (Never make your users wait for an animation to complete if their page or data is ready.)
  - Relatable (natural and fluid, mimic real world physics)

### SVGs

- only use inline-SVG for elements whose properties will be changing in response to user interaction
- for static SVG elements, like our illustration, you should use <img src={...} /> to reduce file bloat.

## Packages/Lib

### React-Spring

- physics based animation library
- useSpring()
- useTransition() : 1. to transition bw diff elements in dom; 2. to mount and unmount elements inside DOM

### Styled Components

- styled.htmlElement
- styled(ParentElement) to inherit from already defined base component

### Polished

- normalise()
  - Each browser has its own default stylesheet, which specifies some minimal rules that apply to elements.
    Resets and Normalisation
    - resets everything on default stylesheet
    - normalisation is less 'aggressive',it’ll just remove the browser inconsistencies.[Normalise.css] was created for this.

### Modifiers

- styled-components-modifiers
- to modify comonents inline , passing a string/ tag
- NOTE: any modifiers should be the last css to be applied, so add to all buttons in the end individually

#### Theme

- colors, typescale (font)
- index.js to export from high level, direct from utils.

## TOOLS

- coolors.co for colors palette
- figma for component design
- unDraw for illustrations
