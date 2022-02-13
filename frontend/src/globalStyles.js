import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Poppins', sans-serif;
  }

  a {
    cursor: pointer;
  }
  
  :root {
    --clr-gray-10: #1d1d1d;
    --clr-gray-9: #2b2b2b;
    --clr-gray-8: #424242;
    --clr-gray-7: #616161;
    --clr-gray-6: #757575;
    --clr-gray-5: #9e9e9e;
    --clr-gray-4: #bdbdbd;
    --clr-gray-3: #e0e0e0;
    --clr-gray-2: #eeeeee;
    --clr-gray-1: #fff7eb;
    
    --clr-green-3: #067061;
    --clr-green-2: #00947e;
    --clr-green-1: #00cdb2;

    --clr-orange-3: #995500;
    --clr-orange-2: #f09e3a;
    --clr-orange-1: #ffbc57;

    --clr-error: #f025369c;

    --size-1: .25rem;
    --size-2: .50rem;
    --size-3: .75rem;
    --size-4: 1rem;
    --size-5: 1.5rem;
    --size-6: 2rem;
    --size-7: 3rem;
    --size-8: 4rem;
    --size-9: 6rem;
    --size-10: 8rem;
    --size-11: 10rem;
    --size-12: 12rem;
    --size-13: 16rem;
    --size-14: 20rem;
    --size-15: 24rem;
    --size-16: 32rem;
    --size-17: 40rem;
    --size-18: 48rem;
  }
`;

export default GlobalStyle;