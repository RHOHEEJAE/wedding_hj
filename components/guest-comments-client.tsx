"use client"

import dynamic from "next/dynamic"

const GuestComments = dynamic(() => import("@/components/guest-comments"), { ssr: false })

export default function GuestCommentsClient() {
  return <GuestComments />
}
