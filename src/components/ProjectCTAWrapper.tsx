'use client'

import { usePathname } from 'next/navigation'
import ProjectCTA from './ProjectCTA'
import { Locale } from '@/app/dictionaries'

type Props = {
  lang: Locale
}

export default function ProjectCTAWrapper({ lang }: Props) {
  const pathname = usePathname()
  
  if (pathname.includes('/contact')) {
    return null
  }

  return <ProjectCTA params={{ lang }} />
}
