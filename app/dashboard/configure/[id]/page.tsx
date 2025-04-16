"use client"
import { useParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppearanceForm } from "@/components/appearance-form"
import { BrandingForm } from "@/components/branding-form"
import { PaymentForm } from "@/components/payment-form"

export default function ConfigurePage() {
  const params = useParams()
  const appId = params.id

  // In a real app, you would fetch the app data based on the ID
  const appData = {
    id: Number(appId),
    name: appId === "1" ? "Spark App" : "EB Charging",
    description: appId === "1" ? "Electric vehicle charging application" : "Energy management platform",
    logo: "/placeholder.svg?height=80&width=80",
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
    paymentOptions: {
      creditCard: true,
      paypal: true,
      applePay: false,
      googlePay: false,
      bankTransfer: true,
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configure {appData.name}</h1>
        <p className="text-muted-foreground">Customize your application settings and appearance</p>
      </div>

      <Tabs defaultValue="branding" className="space-y-4">
        <TabsList>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-4">
          <BrandingForm appData={appData} />
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <AppearanceForm appData={appData} />
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <PaymentForm appData={appData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
