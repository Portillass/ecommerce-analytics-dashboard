import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { Separator } from "@/components/ui/separator"

import { getShopifyData, getTikTokData } from "@/lib/api"

import StatusBar from "@/components/dashboard/StatusBar"
import ShopifyCard from "@/components/dashboard/ShopifyCard"
import TikTokCard from "@/components/dashboard/TikTokCard"
import LoadingCard from "@/components/dashboard/LoadingCard"
import ErrorCard from "@/components/dashboard/ErrorCard"

type ShopifyData = {
  revenue: number
  orders: number
  inventory: number
}

type TikTokData = {
  views: number
  sales: number
  conversion: number
}

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  const [shopify, setShopify] = useState<ShopifyData | null>(null)
  const [tiktok, setTiktok] = useState<TikTokData | null>(null)

  const [shopifyLoading, setShopifyLoading] = useState(true)
  const [tiktokLoading, setTiktokLoading] = useState(true)

  const [tiktokError, setTiktokError] = useState(false)

  // Shopify (Fast API)
  useEffect(() => {
    getShopifyData()
      .then((data) => setShopify(data))
      .finally(() => setShopifyLoading(false))
  }, [])

  // TikTok (Slow / Error API)
  useEffect(() => {
    getTikTokData()
      .then((data) => setTiktok(data))
      .catch(() => setTiktokError(true))
      .finally(() => setTiktokLoading(false))
  }, [])

  return (
    <main className="container mx-auto max-w-6xl py-10 px-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">
          Inventory / Alerts Command Center
        </h1>

        <p className="text-muted-foreground mt-2">
          Monitor Shopify and TikTok marketplace performance in real time.
        </p>
      </div>

      {/* STATUS */}
      <StatusBar
        shopifyLoading={shopifyLoading}
        tiktokLoading={tiktokLoading}
        tiktokError={tiktokError}
      />

      <Separator />

      {/* DASHBOARD */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Shopify */}
        {shopifyLoading ? (
          <LoadingCard title="Shopify" />
        ) : (
          shopify && <ShopifyCard data={shopify} />
        )}

        {/* TikTok */}
        {tiktokLoading ? (
          <LoadingCard title="TikTok" />
        ) : tiktokError ? (
          <ErrorCard title="TikTok" />
        ) : (
          tiktok && <TikTokCard data={tiktok} />
        )}

      </div>

    </main>
  )
}