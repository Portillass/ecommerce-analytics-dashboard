import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"

type Props = {
  shopifyLoading: boolean
  tiktokLoading: boolean
  shopifyError: boolean
  tiktokError: boolean
}

export default function StatusBar({
  shopifyLoading,
  tiktokLoading,
  shopifyError,
  tiktokError,
}: Props) {
  // Shopify is still loading
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

  // Shopify failed (Full Error)
  if (shopifyError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Shopify failed to load. Dashboard data is unavailable.
        </AlertDescription>
      </Alert>
    )
  }

  // Shopify loaded, TikTok still loading
  if (tiktokLoading) {
    return (
      <Alert>
        <AlertTitle>Loading</AlertTitle>
        <AlertDescription>
          Shopify loaded successfully. Waiting for TikTok...
        </AlertDescription>
      </Alert>
    )
  }

  // Shopify loaded, TikTok failed (Partial Success)
  if (tiktokError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Partial Success</AlertTitle>
        <AlertDescription>
          Shopify is available, but TikTok failed to load.
        </AlertDescription>
      </Alert>
    )
  }

  // Everything loaded successfully
  return (
    <Alert>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        All systems operational.
      </AlertDescription>
    </Alert>
  )
}