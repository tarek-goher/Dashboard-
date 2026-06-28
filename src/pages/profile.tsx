import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Shield, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Profile</h2>
        <p className="text-muted-foreground">Manage your personal information and security.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="md:col-span-1">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-primary/80 to-primary" />
            <CardContent className="px-6 pb-6 pt-0 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 border-4 border-card -mt-12 mb-4 bg-muted">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">Admin User</h3>
              <p className="text-sm text-muted-foreground mb-4">Super Administrator</p>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
                <Shield className="w-3 h-3 mr-1" /> Full Access
              </Badge>
              <Button className="w-full hover-elevate" variant="outline">
                <Edit className="w-4 h-4 mr-2" /> Edit Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="md:col-span-2">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm h-full">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your contact details and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" /> Email
                  </div>
                  <p>admin@eg.com</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" /> Phone
                  </div>
                  <p>+1 (555) 000-0000</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" /> Location
                  </div>
                  <p>San Francisco, CA</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" /> Joined
                  </div>
                  <p>January 15, 2021</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-sm font-medium mb-4">Security</h4>
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
