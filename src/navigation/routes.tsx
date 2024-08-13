import type { ComponentType, JSX } from 'react'

import { IndexPage } from '@/pages/IndexPage/IndexPage'
import { TONConnectPage } from '@/pages/TONConnectPage/TONConnectPage'
import { LanguagePage } from '@/pages/LanguagePage/LanguagePage'
import { WelcomePage } from '@/pages/WelcomePage/WelcomePage'
import { OnboardingSecondPage } from '@/pages/OnboardingSecondPage/OnboardingSecondPage'

interface Route {
	path: string
	Component: ComponentType
	title?: string
	icon?: JSX.Element
}

export const routes: Route[] = [
	{ path: '/', Component: IndexPage },
	{ path: '/language', Component: LanguagePage },
	{ path: '/onbording', Component: WelcomePage },
	{ path: '/onboardingSecond', Component: OnboardingSecondPage },
	{
		path: '/ton-connect',
		Component: TONConnectPage,
		title: 'TON Connect',
	},
]
