import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Loader2, X, XCircle } from "lucide-react"

interface EmailFormProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function EmailForm({
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className,
}: EmailFormProps) {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [hide, setHide] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      return
    }

    setIsLoading(true)
    setIsError(false)
    setErrorMessage("")
    setIsSuccess(false)
    setHide(false)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log(email)
      setEmail("")
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting email:", error)
      setIsError(true)
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isError && !hide) {
    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col gap-2 text-black border-black border-2 p-4 rounded-lg bg-white mx-auto">
                <div className="flex items-center justify-between gap-2 flex-row">
                    <div className="flex items-center gap-2">
                        <XCircle className="w-8 h-8 text-red-500" />
                        <p className="text-xl font-bold">Subscription failed</p>
                    </div>
                    <button onClick={() => setHide(true)}>
                        <X className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-sm">{errorMessage}</p>
            </div>
        </div>
    )
  }

  if (isSuccess && !hide) {
    return (
        <div className="flex items-center w-full">
            <div className="flex flex-col gap-2 text-black border-black border-2 p-4 rounded-lg bg-white mx-auto">
                <div className="flex items-center justify-between gap-4 flex-row">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                        <p className="text-xl font-bold">Thanks! You're all set.</p>
                    </div>
                    <button onClick={() => setHide(true)}>
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-sm">Check your inbox for a confirmation email.</p> 
            </div>
        </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex w-full max-w-sm gap-2 ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
        className="flex-1 bg-white text-black border-black border-2"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : buttonText}
      </Button>
    </form>
  )
}
