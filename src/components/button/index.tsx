import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  className?: string | undefined
  form?: string
  primary?: boolean
  primaryDark?: boolean
  secondary?: boolean
  secondaryBlue?: boolean
  secondaryRed?: boolean
  outline?: boolean
  as?: 'button' | 'a'
  disabled?: boolean
  type?: any
  ref?: any
  width?: any
  height?: any
}

type Button = React.FC<ButtonProps>

const ButtonWrapper: React.FC<any> = styled.button`
  &.pq-button {
    position: relative;
    border-radius: 8px;
    ${(props: ButtonProps) =>
      props.height
        ? css`
            height: ${props.height};
          `
        : css`
            height: 48px;
          `}

    ${(props: ButtonProps) =>
      props.width &&
      css`
        width: ${props.width};
      `}
    .pq-button__content {
      display: inline-flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .pq-button__content * + * {
      margin-left: 12px;
    }

    &.-primary {
      box-shadow: 0 4px 12px 0 rgba(239, 39, 45, 0.3);
      background-color: #ff696d;
      color: #fff;
      font-weight: 600;

      :hover {
        background-color: #f1565b;
      }
      :focus {
        background-color: #f1565b;
      }
    }

    &.-primary-dark {
      background-color: #3f6db4;
      box-shadow: unset;
      color: #fff;
      font-weight: 600;
      :hover {
        background-color: black;
      }
      :focus {
        background-color: blue;
      }
    }

    &.-outline {
      border: solid 2px rgba(203, 208, 223, 0.61);

      span {
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }

      &:hover {
        background-color: #eff1f5;
        border: 2px solid #1a3154;
      }
    }

    &.-secondary {
      background-color: #3f6db4;
      box-shadow: unset;
      color: #fff;
      font-weight: 600;
      :hover {
        background-color: #2a579d;
        color: #ffffff;
      }
      :focus {
        background-color: #2a579d;
        color: #ffffff;
      }
    }

    &.-secondary-blue {
      background-color: #eff3f9;
      box-shadow: unset;
      color: #3f6db4;
      font-weight: 600;

      :not(:disabled):hover {
        background-color: #3f6db4 !important;
        color: #ffffff;
        .pq-icon {
          filter: grayscale(1) brightness(10);
        }
      }
      :focus {
        background-color: #2a579d !important;
        color: #ffffff;
        .pq-icon {
          filter: grayscale(1) brightness(10);
        }
      }
    }

    &.-secondary-red {
      background-color: #ffebeb;
      box-shadow: unset;
      color: #ff696d;
      font-weight: 600;
    }
    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  }
`

const ButtonLinkWrapper: React.FC<any> = styled.a`
  &.pq-button {
    text-align: center;

    &.-secondary {
      color: #3f6db4;
    }
  }
`

const Button: Button = React.forwardRef((props, ref: React.Ref<HTMLButtonElement>) => {
  const {
    children,
    className: customClassName,
    primary,
    primaryDark,
    secondary,
    secondaryBlue,
    secondaryRed,
    outline,
    as = 'button',
    ...rest
  } = props

  const customComponentProps = {
    className: '-primary',
    ...rest,
  }

  switch (as) {
    case 'a': {
      return (
        <ButtonLinkWrapper {...customComponentProps}>
          <span ref={ref} className="pq-button__content">
            {children}
          </span>
        </ButtonLinkWrapper>
      )
    }
    default: {
      return (
        <ButtonWrapper {...customComponentProps} ref={ref}>
          <span className="pq-button__content">{children}</span>
        </ButtonWrapper>
      )
    }
  }
})

export default Button
