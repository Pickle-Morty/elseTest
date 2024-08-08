import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { TONConnectPage } from '@/pages/TONConnectPage/TONConnectPage';
import { LanguagePage } from '@/pages/LanguagePage/LanguagePage';
import { OnboardingPage } from '@/pages/OnboardingPage/OnboardingPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/language', Component: LanguagePage },
  { path: '/onbording', Component: OnboardingPage },
  {
    path: '/ton-connect',
    Component: TONConnectPage,
    title: 'TON Connect',
  },
];
