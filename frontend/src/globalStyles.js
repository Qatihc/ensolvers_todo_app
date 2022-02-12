import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    --clr-gray-1: #f5f5f5;
    
    --clr-accent-12:#041835;
    --clr-accent-11:#072757;
    --clr-accent-10:#0a377a;
    --clr-accent-9:#0d47a1;
    --clr-accent-8:#1565c0;
    --clr-accent-7:#1976d2;
    --clr-accent-6:#1e88e5;
    --clr-accent-5:#2196f3;
    --clr-accent-4:#42a5f5;
    --clr-accent-3:#64b5f6;
    --clr-accent-2:#90caf9;
    --clr-accent-1:#E8F2FD;

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