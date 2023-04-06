import type { Meta, StoryObj } from "@storybook/react"
import { AuthProvider } from "./AuthProvider"

const meta: Meta<typeof AuthProvider> = {
  component: AuthProvider,
}
export default meta

export const Default: StoryObj<typeof AuthProvider> = {
  args: {

  },
  name: "デフォルト",
};
