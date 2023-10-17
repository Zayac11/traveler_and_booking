declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare module '*.png'
declare module '*.webp'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean
declare const __MODE__: 'storybook' | 'frontend' | 'jest'

declare module '*.woff'
declare module '*.eot'
declare module '*.ttf'
declare module '*.woff2'

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>
      }
    : T
