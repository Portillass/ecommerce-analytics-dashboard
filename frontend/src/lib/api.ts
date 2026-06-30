export async function getShopifyData() {
  const res = await fetch("http://localhost:3001/shopify_data")
  if (!res.ok) throw new Error("Shopify failed")
  return res.json()
}

export async function getTikTokData() {
  const res = await fetch("http://localhost:3001/tiktok_data")
  if (!res.ok) throw new Error("TikTok failed")
  return res.json()
}