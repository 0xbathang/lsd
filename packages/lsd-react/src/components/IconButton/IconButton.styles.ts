import { css } from '@emotion/react'
import { iconButtonClasses } from './IconButton.classes'

export const IconButtonStyles = css`
  .${iconButtonClasses.root} {
    display: flex;
    width: 32px;
    height: 28px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${iconButtonClasses.filled} {
    background-color: rgb(var(--lsd-icon-primary));

    svg {
      --lsd-icon-primary: var(--lsd-icon-secondary);
    }
  }

  .${iconButtonClasses.outlined} {
  }

  .${iconButtonClasses.disabled} {
    opacity: 0.34;
    cursor: default;
  }

  .${iconButtonClasses.large} {
    width: 40px;
    height: 40px;
  }

  .${iconButtonClasses.medium} {
    width: 32px;
    height: 32px;
  }

  .${iconButtonClasses.small} {
    width: 28px;
    height: 28px;
  }
`
