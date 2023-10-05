export interface DOMProps {
    $element: string,
    text: string,
    type: string,
    className: string | string[] | null,
    id: string,
    createElement: () => string,
    init: () => void
}