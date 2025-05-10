import { ReactNode } from 'react'
import { Agency, AppIcon, Coworking, Crypto, Marketing, PortFolio, SassClassic, SassModern, Software, Startup } from './svgIcons'

export type MenuItemTypes = {
  key: string
  label: string
  isTitle?: boolean
  icon?: ReactNode
  iconVariant?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  isDivider?: boolean
  parentKey?: string
  target?: string
  children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/home',
    isTitle: false,
  },
  {
    key: 'landing',
    label: 'Landing',
    isTitle: false,
    children: [
      {
        key: 'app',
        label: 'App',
        url: '/landing/app',
        parentKey: 'landing',
      },
      {
        key: 'sass-classic',
        label: 'Sass Classic',
        url: '/landing/sass-classic',
        parentKey: 'landing',
      },
      {
        key: 'software',
        label: 'Software',
        url: '/landing/software',
        parentKey: 'landing',
      },
      {
        key: 'coworkng',
        label: 'Coworking',
        url: '/landing/coworking',
        parentKey: 'landing',
      },
      {
        key: 'marketing',
        label: 'Marketing',
        url: '/landing/marketing',
        parentKey: 'landing',
      },
      {
        key: 'sass-modern',
        label: 'Sass Modern',
        url: '/landing/sass-modern',
        parentKey: 'landing',
      },
      {
        key: 'startup',
        label: 'Startup',
        url: '/landing/startup',
        parentKey: 'landing',
      },
      {
        key: 'agency',
        label: 'Agency',
        url: '/landing/agency',
        parentKey: 'landing',
      },
      {
        key: 'crypto',
        label: 'Crypto',
        url: '/landing/crypto',
        parentKey: 'landing',
      },
      {
        key: 'potfolio-landing',
        label: 'Portfolio',
        url: '/landing/portfolio',
        parentKey: 'landing',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    children: [
      {
        key: 'company',
        label: 'Company',
        url: '/pages/company',
        parentKey: 'pages',
      },
      {
        key: 'dashboard',
        label: 'Dashboard',
        url: '/dashboard',
        parentKey: 'pages',
      },
      {
        key: 'career',
        label: 'Career',
        url: '/pages/career',
        parentKey: 'pages',
      },
      {
        key: 'pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'setting',
        label: 'Setting',
        url: '/setting',
        parentKey: 'pages',
      },
      {
        key: 'help',
        label: 'Help',
        url: '/pages/help',
        parentKey: 'pages',
      },
    ],
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    isTitle: false,
    children: [
      {
        key: 'portfolio-grid',
        url: '/pages/portfolio/grid',
        label: 'Portfolio Grid',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-masonry',
        url: '/pages/portfolio/masonry',
        label: 'Portfolio Masonry',
        parentKey: 'portfolio',
      },
      {
        key: 'portfolio-item',
        url: '/pages/portfolio/item',
        label: 'Portfolio Item',
        parentKey: 'portfolio',
      },
    ],
  },
  {
    key: 'blogs',
    label: 'Blog',
    parentKey: 'Pages',
    isDivider: false,
    children: [
      {
        key: 'blog-page',
        label: 'Blog',
        url: '/pages/blogs/list',
        parentKey: 'blogs',
      },
      {
        key: 'blog-post',
        label: 'Blog Post',
        url: '/pages/blogs/post',
        parentKey: 'blogs',
      },
    ],
  },
  {
    key: 'auth',
    label: 'Account',
    isTitle: false,
    children: [
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'auth',
      },
      {
        key: 'auth-register',
        label: 'Sign Up',
        url: '/auth/register',
        parentKey: 'auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forget Password',
        url: '/auth/forgot-password',
        parentKey: 'auth',
      },
      {
        key: 'auth-confirm-account',
        label: 'Confirm Account',
        url: '/auth/confirm-account',
        parentKey: 'auth',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    url: '/contact-us',
    isTitle: false,
  },
]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'home',
    label: 'Home',
    url: '/',
    isTitle: true,
  }
]

export { HORIZONTAL_MENU_ITEMS, MENU_ITEMS }
