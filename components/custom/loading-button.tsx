import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

type LoadingButtonProps = {
    isLoading: boolean,
    text: string,
    loadingText: string
}

const LoadingButton = (props: LoadingButtonProps) => {
  return (
    <Button
          disabled={props.isLoading}
          className="flex gap-2"
          type="submit"
        >
          {props.isLoading && (
            <Loader2 size={18} className="animate-spin" />
          )}
          {props.isLoading ? props.loadingText : props.text}
        </Button>
  )
}

export default LoadingButton