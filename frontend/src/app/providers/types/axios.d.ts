import 'axios'

declare module 'axios' {
    export interface AxiosInterceptorManager<V> {
        use(
            onFulfilled?: ((value: V) => V | Promise<V>) | null,
            onRejected?: ((error: any) => any) | null,
            options?: AxiosInterceptorOptions
        ): number
        eject(id: number): void
        clear(): void
        handlers: any[]
    }
}
