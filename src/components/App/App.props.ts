export interface AppProps {
    showModal: (value: boolean) => void,
    addPayHandler: () => void,
    submitPayHandler: () => void
    cancelCardHandler: () => void,
    submitCardHandler: () => void
}