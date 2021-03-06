import styled from "styled-components"

/* Fuente del spinner: https://projects.lukehaas.me/css-loaders/ */
export const LoadingSpinner = styled.div`
  margin: 25% auto;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(46,52,54, 0.2);
  border-right: 1.1em solid rgba(46,52,54, 0.2);
  border-bottom: 1.1em solid rgba(46,52,54, 0.2);
  border-left: 1.1em solid #2e3436;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export const SmallLoadingSpinner = styled(LoadingSpinner)`
  margin: 0 auto;
  font-size: 4px;
`