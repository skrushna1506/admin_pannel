"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

interface AppearanceFormProps {
  appData: {
    id: number
    primaryColor: string
    secondaryColor: string
  }
}

export function AppearanceForm({ appData }: AppearanceFormProps) {
  const { toast } = useToast()
  const [primaryColor, setPrimaryColor] = useState(appData.primaryColor)
  const [secondaryColor, setSecondaryColor] = useState(appData.secondaryColor)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Appearance updated",
      description: "Your appearance changes have been saved successfully.",
    })

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize your application's colors and theme</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="primary-color">Primary Color</Label>
            <div className="flex items-center gap-4">
              <input
                id="primary-color"
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded-md border"
              />
              <div className="h-10 w-20 rounded-md" style={{ backgroundColor: primaryColor }} />
              <span className="text-sm font-mono">{primaryColor}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="secondary-color">Secondary Color</Label>
            <div className="flex items-center gap-4">
              <input
                id="secondary-color"
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded-md border"
              />
              <div className="h-10 w-20 rounded-md" style={{ backgroundColor: secondaryColor }} />
              <span className="text-sm font-mono">{secondaryColor}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-sm font-medium">Preview</h3>
            <div className="rounded-lg border p-4">
              <div className="flex flex-col gap-4">
                <div
                  className="h-12 rounded-md flex items-center justify-center text-white font-medium"
                  style={{ backgroundColor: primaryColor }}
                >
                  Primary Button
                </div>
                <div
                  className="h-12 rounded-md flex items-center justify-center text-white font-medium"
                  style={{ backgroundColor: secondaryColor }}
                >
                  Secondary Button
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <div className="h-8 w-8 rounded-full" style={{ backgroundColor: secondaryColor }} />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
