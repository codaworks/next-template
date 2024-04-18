import { useCallback, useEffect, useRef } from 'react'

export const useCallbackRef = <T extends Function>(callback: T) => {
    const savedCallback = useRef<T>()
    savedCallback.current = callback

    return savedCallback
}

export const useEvent = <T, P extends unknown[]>(handler: (...params: P) => T) => {
    const handlerRef = useCallbackRef(handler)

    return useCallback((...args: P) => {
        const fn = handlerRef.current
        return fn(...args)
    }, [handlerRef]);
}

export const useInterval = <T extends Function>(callback: T, delay: number) => {
    const savedCallback = useCallbackRef(callback)

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay != null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay, savedCallback])
}
