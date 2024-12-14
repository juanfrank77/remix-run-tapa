import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  navItems: {
    link: string
    title: string
    target?: '_blank'
  }[]
  children: React.ReactNode
}

export const LandingContainer: React.FC<Props> = ({
  navItems,
  children,
  ...props
}) => {
  return (
    <main {...props}>
      <div className={'bg-white text-black dark:bg-black dark:text-slate-200'}>
        {children}
      </div>
    </main>
  )
}
