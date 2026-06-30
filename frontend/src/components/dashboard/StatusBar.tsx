import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"

type Props = {
  shopifyLoading: boolean
  tiktokLoading: boolean
  tiktokError: boolean
}

export default function StatusBar({
  shopifyLoading,
  tiktokLoading,
  tiktokError,
}: Props) {

  if (shopifyLoading) {
    return (
      <Alert>
        <AlertTitle>Loading</AlertTitle>
        <AlertDescription>
          Loading Shopify data...
        </AlertDescription>
      </Alert>
    )
  }

  if (!shopifyLoading && tiktokLoading) {
    return (
      <Alert>
        <AlertTitle>Loading</AlertTitle>
        <AlertDescription>
          Shopify loaded successfully. Waiting for TikTok...
        </AlertDescription>
      </Alert>
    )
  }

  if (tiktokError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Partial Success</AlertTitle>
        <AlertDescription>
          Shopify is available but TikTok failed to load.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        All systems operational.
      </AlertDescription>
    </Alert>
  )
}