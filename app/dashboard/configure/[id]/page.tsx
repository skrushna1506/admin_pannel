"use client"
import { useParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppearanceForm } from "@/components/appearance-form"
import { BrandingForm } from "@/components/branding-form"
import { PaymentForm } from "@/components/payment-form"
import { CartForm } from "@/components/cart-form"
import { ProductDisplayForm } from "@/components/product-display-form"
import { ShippingForm } from "@/components/shipping-form"
import { OrderManagementForm } from "@/components/order-management-form"

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
    cartConfig: {
      enabled: true
    },
    productDisplay: {
      layout: "grid" as const,
      showRatings: true,
      showSeller: true,
      showPrice: true,
      enableQuickView: true,
      itemsPerRow: 3 as const
    },
    shipping: {
      enablePinCodeCheck: true,
      enableDeliveryEstimates: true,
      showDeliveryCharge: true,
      baseDeliveryCharge: 40,
      addressFields: [
        { key: "flatNo", label: "Flat, House no, Building", required: true, enabled: true },
        { key: "street", label: "Area, Street, Sector, Village", required: true, enabled: true },
        { key: "city", label: "City/Town", required: true, enabled: true },
        { key: "pincode", label: "Pincode", required: true, enabled: true },
        { key: "state", label: "State/Province", required: true, enabled: true },
        { key: "country", label: "Country", required: true, enabled: true },
        { key: "phone", label: "Mobile Number", required: true, enabled: true },
      ]
    },
    orderManagement: {
      enableOrderTracking: true,
      enablePushNotifications: true,
      showOrderHistory: true,
      itemsPerPage: 10,
      enableInvoiceDownload: true,
      showCancelButton: true,
      cancelTimeLimit: 24,
      orderStatuses: [
        { key: "pending", label: "Order Pending", enabled: true, showEstimatedTime: false },
        { key: "confirmed", label: "Order Confirmed", enabled: true, showEstimatedTime: true },
        { key: "processing", label: "Processing", enabled: true, showEstimatedTime: true },
        { key: "shipped", label: "Shipped", enabled: true, showEstimatedTime: true },
        { key: "delivered", label: "Delivered", enabled: true, showEstimatedTime: false },
        { key: "cancelled", label: "Cancelled", enabled: true, showEstimatedTime: false }
      ]
    }
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
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="cart">Cart</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-4">
          <BrandingForm appData={appData} />
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <AppearanceForm appData={appData} />
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <ProductDisplayForm appData={appData} />
        </TabsContent>

        <TabsContent value="cart" className="space-y-4">
          <CartForm appData={appData} />
        </TabsContent>

        <TabsContent value="shipping" className="space-y-4">
          <ShippingForm appData={appData} />
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <PaymentForm appData={appData} />
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <OrderManagementForm appData={appData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
