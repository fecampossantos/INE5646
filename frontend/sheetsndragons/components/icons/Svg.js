import React from 'react';
import styled from 'styled-components';

const addColor = props => {
  const { theme, primary, secondary, red, color } = props;

  if (primary) return `color: ${theme.palette.primary.main}`;
  if (secondary) return `color: ${theme.palette.secondary.main}`;
  if (red) return `color: ${theme.palette.error.main}`;
  if (color) return `color: ${color}`;
  

  return '';
};

const Svg = styled.svg.attrs(props => ({
  'aria-hidden': 'true',
  focusable: 'false',
  role: 'img',
  viewBox: props.viewBox || '0 0 512 512',
}))`
  width: ${({ size }) => size || '25'}px;
  height: ${({ size }) => size || '25'}px;
  .secondary {
    opacity: 0.4;
  }
  ${({ spin }) =>
    spin &&
    `
    @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
    }
    animation-name: spin;
    animation-duration: 1300ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `}
`;

const SvgComponent = ({ path, isDuotone, ...props }) => {
  if (isDuotone) {
    if (!Array.isArray(path)) throw new Error('Duotone icons must have array paths')

    return (
      <Svg {...props}>
          <g>
          <path className="secondary" fill="currentColor" d={path[0]} />
          <path fill="currentColor" d={path[1]} />
        </g>
      </Svg>
    )
  }

  const content = Array.isArray(path) ? (
    <g>
      {path.map((p, i) => <path key={i} fill="currentColor" d={p} />)}
    </g>
  ) : (
    <path fill="currentColor" d={path} />
  );

  return <Svg {...props}>{content}</Svg>;
};

export default SvgComponent;