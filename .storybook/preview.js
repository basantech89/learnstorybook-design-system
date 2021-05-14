
// Global decorator to apply the styles to all stories
import { GlobalStyle } from "../src/shared/global";

export const decorators = [Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
)]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}