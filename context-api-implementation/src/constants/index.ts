import type {
  BootstrapColor,
  BootstrapIconClass,
  BootstrapIconLabel,
  Theme,
} from "../types"

export const THEME_TOGGLE_BUTTON_COLOR: Record<Theme, BootstrapColor> = {
  dark: "warning",
  light: "dark",
} as const

export const THEME_TOGGLE_BUTTON_TEXT: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
} as const

export const BOOTSTRAP_ICON: Record<BootstrapIconLabel, BootstrapIconClass> = {
  sun: "bi bi-sun-fill",
  moon: "bi bi-moon-fill",
  trash: "bi bi-trash",
  pencil: "bi bi-pencil-square",
  plus: "bi bi-plus",
} as const
