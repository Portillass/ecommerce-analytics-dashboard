import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

type Props = {
  title: string
}

export default function ErrorCard({ title }: Props) {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        Failed to load data.
      </AlertDescription>
    </Alert>
  )
}