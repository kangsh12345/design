export const breakpoints = {
  desktop: 1440,
  table: 780,
  mobile: 0,
};

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
