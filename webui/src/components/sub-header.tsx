"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

export function SubHeader() {
  const [input, setInput] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setDialogContent(input)
      setIsDialogOpen(true)
      setInput("")
    }
  }

  return (
    <div className="sub-header">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="openwebui-container">
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <Input
              type="text"
              placeholder="Ask OpenWebUI anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="openwebui-input"
            />
            <Button type="submit" className="openwebui-button">
              <Send className="h-4 w-4 mr-2" />
              Execute
            </Button>
          </form>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>OpenWebUI Response</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm">{dialogContent}</p>
                <p className="text-sm mt-4">
                  This is a placeholder for the OpenWebUI response. In a real implementation, 
                  this would connect to the OpenWebUI API and display the actual response.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}