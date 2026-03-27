import React from 'react';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest // 1. Pega todas as outras propriedades (disabled, required, etc)
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      {/* 2. Despeja o restante das propriedades direto no input */}
      <input id={id} type={type} {...rest} />
    </>
  );
}