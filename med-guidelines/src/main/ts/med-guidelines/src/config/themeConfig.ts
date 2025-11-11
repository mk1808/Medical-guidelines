import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    strictTokens: false,
    theme: {
        tokens: {
            colors: {
                primary: {
                    DEFAULT: { value: "#1dbdb9" },
                    50: { value: "#f1fcfb" },
                    100: { value: "#cef9f4" },
                    200: { value: "#9df2e9" },
                    300: { value: "#64e4db" },
                    400: { value: "#34cdc7" },
                    500: { value: "#34cdc7" },
                    600: { value: "#138e8d" },
                    700: { value: "#137272" },
                    800: { value: "#145a5b" },
                    900: { value: "#164a4b" },
                    950: { value: "#062b2d" },
                },
                secondary: {
                    DEFAULT: { value: "#1a2f45" },
                    50: { value: "#f3f7fc" },
                    100: { value: "#e7eff7" },
                    200: { value: "#c9ddee" },
                    300: { value: "#99c1e0" },
                    400: { value: "#62a1ce" },
                    500: { value: "#3e85b9" },
                    600: { value: "#2d6a9c" },
                    700: { value: "#25557f" },
                    800: { value: "#22496a" },
                    900: { value: "#213e59" },
                    950: { value: "#1a2f45" },
                },
                accent: {
                    DEFAULT: { value: "#88bfc1" },
                    50: { value: "#f2f9f9" },
                    100: { value: "#deeeef" },
                    200: { value: "#c2dedf" },
                    300: { value: "#88bfc1" },
                    400: { value: "#65a8ab" },
                    500: { value: "#4a8c90" },
                    600: { value: "#40747a" },
                    700: { value: "#396065" },
                    800: { value: "#355155" },
                    900: { value: "#2f444a" },
                    950: { value: "#1c2c30" },
                },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: "{colors.primary.50}" },
                    panel: { value: "{colors.primary.50}" },
                    emphasized: { value: "{colors.primary.200}" },
                    subtle: { value: "{colors.bg}" },
                    muted: { value: "{colors.primary.100}" },
                },
                fg: { value: "{colors.primary.950}" },
                primary: {
                    solid: { value: "{colors.primary.500}" },
                    contrast: { value: "{colors.primary.100}" },
                    fg: { value: "{colors.primary.700}" },
                    muted: { value: "{colors.primary.100}" },
                    subtle: { value: "{colors.primary.200}" },
                    emphasized: { value: "{colors.primary.300}" },
                    focusRing: { value: "{colors.primary.500}" },
                },
                secondary: {
                    solid: { value: "{colors.secondary.500}" },
                    contrast: { value: "{colors.secondary.100}" },
                    fg: { value: "{colors.secondary.700}" },
                    muted: { value: "{colors.secondary.100}" },
                    subtle: { value: "{colors.secondary.200}" },
                    emphasized: { value: "{colors.secondary.300}" },
                    focusRing: { value: "{colors.secondary.500}" },
                },
                accent: {
                    solid: { value: "{colors.accent.500}" },
                    contrast: { value: "{colors.accent.100}" },
                    fg: { value: "{colors.accent.700}" },
                    muted: { value: "{colors.accent.100}" },
                    subtle: { value: "{colors.accent.200}" },
                    emphasized: { value: "{colors.accent.300}" },
                    focusRing: { value: "{colors.accent.500}" },
                },
            },
        },
    },
    globalCss: {
        html: {
            colorPalette: "primary",
        },
    },
});

const styleSystem = createSystem(defaultConfig, config);

export function getCssVar(tokenName: string): string {
    return styleSystem.token.var(tokenName);
}

export default styleSystem;
