import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "Nexus Store",
    email: "admin@eg.com",
    currency: "USD",
    timezone: "UTC-8",
  });

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Settings Saved",
        description: "Your store settings have been updated successfully.",
      });
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your store preferences and configuration.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
            <CardDescription>Update your store's basic information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex flex-col items-center gap-2">
                <div className="h-32 w-32 rounded-xl bg-muted border-2 border-dashed border-border/50 flex items-center justify-center overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=nexus&backgroundColor=06b6d4" alt="Logo" className="h-full w-full object-cover" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Upload className="h-4 w-4 mr-2" /> Upload Logo
                </Button>
              </div>
              
              <div className="flex-1 space-y-4 w-full">
                <div className="grid gap-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input 
                    id="storeName" 
                    value={formData.storeName}
                    onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Support Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select value={formData.currency} onValueChange={(v) => setFormData({...formData, currency: v})}>
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="JPY">JPY (¥)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select value={formData.timezone} onValueChange={(v) => setFormData({...formData, timezone: v})}>
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select Timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UTC-8">Pacific Time (PT)</SelectItem>
                        <SelectItem value="UTC-5">Eastern Time (ET)</SelectItem>
                        <SelectItem value="UTC+0">Greenwich Mean Time (GMT)</SelectItem>
                        <SelectItem value="UTC+1">Central European Time (CET)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-end border-t border-border/50 pt-6">
            <Button onClick={handleSave} disabled={isSaving} className="hover-elevate">
              {isSaving ? (
                <>Saving...</>
              ) : (
                <><Save className="mr-2 h-4 w-4" /> Save Changes</>
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
