import { css } from '@emotion/react'
import { calendarClasses } from './Calendar.classes'

export const CalendarStyles = css`
  .${calendarClasses.root} {
    border: 1px solid rgb(var(--lsd-border-primary));
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(var(--lsd-surface-primary));

    user-select: none;
    padding: 8px;
  }

  .${calendarClasses.container} {
    display: flex;
    flex-direction: column;
  }

  .${calendarClasses.open} {
    opacity: 1;
    visibility: visible;
  }

  .${calendarClasses.header} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    margin-bottom: 8px;
  }

  .${calendarClasses.weekDay} {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    margin-bottom: 4px;
  }

  .${calendarClasses.row} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${calendarClasses.changeYear} {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(var(--lsd-border-primary));
    padding: 2px 6px;
    gap: 6px;
  }

  .${calendarClasses.changeYearButton} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    height: 14px;
    width: 14px;
    padding: 0;
  }

  .${calendarClasses.month} {
    margin-right: 8px;
  }

  .${calendarClasses.dayContainer} {
    cursor: pointer;
    background: transparent;

    position: relative;
    box-sizing: border-box;

    /* Prevents layout shifts when we add borders to the days */
    border: 1px solid transparent;
  }

  .${calendarClasses.day} {
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .${calendarClasses.day}:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.day} label:hover {
    cursor: pointer;
  }

  .${calendarClasses.daySelected} {
    border: 1px solid rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayDisabled} {
    opacity: 0.3;
    cursor: default;
  }

  .${calendarClasses.todayIndicator} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2px;
  }

  .${calendarClasses.disabled} {
    pointer-events: none;
    border: 1px solid rgba(var(--lsd-border-primary), 0.3);
    label {
      opacity: 0.3;
    }
    .${calendarClasses.button} {
      opacity: 0.3;
    }
    .${calendarClasses.daySelected} {
      opacity: 0.3;
    }
  }

  .${calendarClasses.button} {
    border: 1px solid rgb(var(--lsd-border-primary));
    cursor: pointer;
    background: transparent;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
  }

  .${calendarClasses.nextMonthButton} {
    top: 8px;
    right: 8px;
  }

  .${calendarClasses.previousMonthButton} {
    top: 8px;
    left: 8px;
  }

  /* Using style double instead of solid. When collapsing borders, */
  /* this prevents the transparent borders from overriding the other borders. */
  /* This happens because the 'double' style is more specific than the 'solid' style */
  .${calendarClasses.dayBorderLeft} {
    border-left: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderRight} {
    border-right: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderLeftAndRight} {
    border-left: 1px double rgb(var(--lsd-border-primary));
    border-right: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.dayBorderTopAndBottom} {
    border-top: 1px double rgb(var(--lsd-border-primary));
    border-bottom: 1px double rgb(var(--lsd-border-primary));
  }

  .${calendarClasses.monthTable} {
    border-collapse: collapse;
  }
`
