import styled,{ css }  from 'styled-components'

export const SButton = styled.button(
		() => css`
      background: rebeccapurple;
      padding: 1rem 2rem;
      cursor: pointer;
      color: #ffffff;
      border: none;
      box-shadow: 0 4px 5px rgba(167, 101, 239, .3), 0 2px 5px rgba(167, 101, 239, .5);
      border-radius: 5px;
						transition: background 200ms ease-in, box-shadow 200ms ease-out;
      &:hover {
        border-color: transparent;
        background: #a95eff;
        box-shadow: none;
      }
    `
)