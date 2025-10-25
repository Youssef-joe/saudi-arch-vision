import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  Layers,
  Eye,
} from "lucide-react";

const Viewer3D = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                3D Viewer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Interactive 3D visualization of your architectural plans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 3D Viewer */}
            <Card className="lg:col-span-3 p-0 overflow-hidden">
              <div className="relative bg-gradient-to-br from-secondary/50 to-background h-[600px] flex items-center justify-center">
                <div className="text-center space-y-4 text-muted-foreground">
                  <Layers className="h-16 w-16 mx-auto opacity-50" />
                  <p className="text-lg">3D model will be rendered here</p>
                  <p className="text-sm">Upload a plan to view its 3D representation</p>
                </div>

                {/* Controls */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Button size="icon" variant="secondary">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <RotateCw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Side Panel */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  View Options
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show Grid</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show Dimensions</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show Annotations</span>
                    <input type="checkbox" className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Wireframe Mode</span>
                    <input type="checkbox" className="toggle" />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-accent" />
                  Layers
                </h3>
                <div className="space-y-2">
                  {["Walls", "Windows", "Doors", "Furniture", "HVAC", "Electrical"].map((layer) => (
                    <div key={layer} className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-accent to-teal-light">
                Export Model
              </Button>
            </Card>
          </div>

          {/* Issue Markers */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Design Issues & Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span className="font-semibold text-sm">Ventilation</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Insufficient natural ventilation in Room 3A
                </p>
              </div>
              <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="font-semibold text-sm">Orientation</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  North-facing windows may require better insulation
                </p>
              </div>
              <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="font-semibold text-sm">Compliant</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Energy efficiency standards met
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Viewer3D;
