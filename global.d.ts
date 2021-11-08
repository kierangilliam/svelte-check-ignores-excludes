
declare global {
    namespace JSX {
        interface HTMLProps<HTMLStyleElement> extends HTMLProps<HTMLStyleElement> {
			global: boolean
        }
    }
}