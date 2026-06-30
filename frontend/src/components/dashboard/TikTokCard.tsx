import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

type Props = {
  data: {
    views: number
    sales: number
    conversion: number
  }
}

export default function TikTokCard({ data }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>TikTok</CardTitle>

        <Badge>Connected</Badge>
      </CardHeader>

      <CardContent className="space-y-2">
        <p><strong>Views:</strong> {data.views}</p>
        <p><strong>Sales:</strong> {data.sales}</p>
        <p><strong>Conversion:</strong> {data.conversion}%</p>
      </CardContent>
    </Card>
  )
}