import { createGlobalStyle } from 'styled-components';

export const size = {
    mobile: '375px',
    tablet: '768px',
    laptop: '1024px',
};

export default createGlobalStyle`
:root {
    --red: #e52e4d;
    --blue: #1E90FF;
    --green: #006400;

    --text-title: #363f5f;
    --text-body: #979cc3;

    --background: #f0f2f5;
    --shape: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

html {
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }

    @media(max-width: 375px){
        font-size: 81.25%;
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font-family: 'Roboto Slab', serif;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500
}

button {
    cursor: pointer
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}


.react-modal-content{
  width: 75%;
  max-width: 576px;
  background: #f0f2f5;
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}


.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8)
  }
}
`;
