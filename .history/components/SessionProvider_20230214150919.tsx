'use client'

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import { Children } from "react";

export function SessionProvider() {
  return (
    <Provider>
      {Children}
    </Provider>
  )
}