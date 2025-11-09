"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProps } from "./ColorMode";
import styleSystem from "@/config/themeConfig";

export const ChakraConfigProvider = (props: ColorModeProviderProps) => {
	return (
		<ChakraProvider value={styleSystem}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
};
