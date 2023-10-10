export interface ListProps {
    $element: string,
    createElement: (payment: object | null) => string,
    render: (className: string) => void,
    data?: object[]
}