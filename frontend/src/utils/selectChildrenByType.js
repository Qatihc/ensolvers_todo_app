import React from 'react';

// Si el child es un styled component, su type no coincide con el del componente al que le aplico los estilos,
// pero su type.target si lo hace, por lo que comparo ambas propiedades.

const childrenByType = (children, type) =>
  React.Children.toArray(children).filter(child => (child.type === type || child.type?.target === type));

const firstChildByType = (children, type) =>
  childrenByType(children, type)[0];

export { childrenByType, firstChildByType };