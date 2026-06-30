import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

type Props = {
  data: {
    revenue: number
    orders: number
    inventory: number
  }
}

export default function ShopifyCard({ data }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Shopify</CardTitle>

        <Badge>Connected</Badge>
      </CardHeader>

      <CardContent className="space-y-2">
        <p><strong>Revenue:</strong> ${data.revenue}</p>
        <p><strong>Orders:</strong> {data.orders}</p>
        <p><strong>Inventory:</strong> {data.inventory}</p>
      </CardContent>
    </Card>
  )
}