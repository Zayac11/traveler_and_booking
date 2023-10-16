import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    element?: HTMLElement
    children: ReactNode
}

export const Portal = (props: PortalProps) => {
    // prettier-ignore
    const {
        children,
        element = __MODE__ === 'storybook'
            ? document.querySelector('#storybook-root') ?? document.body
            : document.querySelector('#root') ?? document.body
    } = props

    return createPortal(children, element)
}
