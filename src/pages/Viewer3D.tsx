import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useTranslation } from "react-i18next";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize,
  Layers,
  Eye,
  AlertTriangle,
  CheckCircle,
  Info,
  Play,
  Pause,
  RotateCcw,
  Home,
} from "lucide-react";

const Viewer3D = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);
  const [viewOptions, setViewOptions] = useState({
    showGrid: true,
    showDimensions: true,
    showAnnotations: false,
    wireframeMode: false,
  });

  const mockIssues = [
    {
      id: 1,
      type: 'critical' as const,
      title: 'Fire Exit Blocked',
      description: 'Emergency exit pathway obstructed by furniture placement',
      location: 'Ground Floor - East Wing',
      coordinates: { x: 45, y: 30 },
    },
    {
      id: 2,
      type: 'warning' as const,
      title: 'Insufficient Ventilation',
      description: 'Natural ventilation below Saudi Building Code requirements',
      location: 'Second Floor - Rooms 201-205',
      coordinates: { x: 65, y: 50 },
    },
    {
      id: 3,
      type: 'info' as const,
      title: 'Energy Optimization',
      description: 'Opportunity for improved thermal efficiency',
      location: 'South Facade',
      coordinates: { x: 80, y: 70 },
    },
  ];

  const layers = [
    { name: t("viewer3d.layerTypes.walls"), enabled: true, color: '#8B5CF6' },
    { name: t("viewer3d.layerTypes.windows"), enabled: true, color: '#06B6D4' },
    { name: t("viewer3d.layerTypes.doors"), enabled: true, color: '#10B981' },
    { name: t("viewer3d.layerTypes.furniture"), enabled: false, color: '#F59E0B' },
    { name: t("viewer3d.layerTypes.hvac"), enabled: true, color: '#EF4444' },
    { name: t("viewer3d.layerTypes.electrical"), enabled: false, color: '#F97316' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                {t("viewer3d.title")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("viewer3d.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 3D Viewer */}
            <Card className="lg:col-span-3 p-0 overflow-hidden">
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 h-[600px]">
                {/* Mock 3D Building */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative transform-gpu" style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-25deg)' }}>
                    {/* Building Base */}
                    <div className="relative">
                      {/* Ground Floor */}
                      <div className="w-80 h-60 bg-gradient-to-br from-blue-400/20 to-blue-600/30 border-2 border-blue-400/50 rounded-lg shadow-2xl">
                        <div className="absolute inset-2 grid grid-cols-4 gap-2">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="bg-yellow-300/20 border border-yellow-400/30 rounded" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Second Floor */}
                      <div className="w-80 h-60 bg-gradient-to-br from-purple-400/20 to-purple-600/30 border-2 border-purple-400/50 rounded-lg shadow-2xl transform -translate-y-8 translate-x-4">
                        <div className="absolute inset-2 grid grid-cols-4 gap-2">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="bg-green-300/20 border border-green-400/30 rounded" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Roof */}
                      <div className="w-80 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg transform -translate-y-12 translate-x-2 shadow-xl" />
                    </div>
                  </div>
                </div>

                {/* Issue Markers */}
                {mockIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer animate-pulse ${
                      issue.type === 'critical' ? 'bg-red-500' :
                      issue.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}
                    style={{ left: `${issue.coordinates.x}%`, top: `${issue.coordinates.y}%` }}
                    title={issue.title}
                  />
                ))}

                {/* Controls */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <RotateCw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <Home className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-black/50 hover:bg-black/70">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>

                {/* Animation Controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="bg-black/50 hover:bg-black/70"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>

                {/* Loading Indicator */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    3D Model Loaded
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Side Panel */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-accent" />
                  {t("viewer3d.viewOptions")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{t("viewer3d.options.showGrid")}</span>
                    <Switch 
                      checked={viewOptions.showGrid}
                      onCheckedChange={(checked) => setViewOptions(prev => ({ ...prev, showGrid: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{t("viewer3d.options.showDimensions")}</span>
                    <Switch 
                      checked={viewOptions.showDimensions}
                      onCheckedChange={(checked) => setViewOptions(prev => ({ ...prev, showDimensions: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{t("viewer3d.options.showAnnotations")}</span>
                    <Switch 
                      checked={viewOptions.showAnnotations}
                      onCheckedChange={(checked) => setViewOptions(prev => ({ ...prev, showAnnotations: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{t("viewer3d.options.wireframeMode")}</span>
                    <Switch 
                      checked={viewOptions.wireframeMode}
                      onCheckedChange={(checked) => setViewOptions(prev => ({ ...prev, wireframeMode: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-accent" />
                  {t("viewer3d.layers")}
                </h3>
                <div className="space-y-3">
                  {layers.map((layer, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded border-2"
                          style={{ backgroundColor: layer.enabled ? layer.color : 'transparent', borderColor: layer.color }}
                        />
                        <span className="text-sm font-medium">{layer.name}</span>
                      </div>
                      <Switch 
                        checked={layer.enabled}
                        onCheckedChange={(checked) => {
                          layer.enabled = checked;
                          setSelectedLayer(checked ? layer.name : null);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-accent to-teal-light">
                  {t("viewer3d.exportModel")}
                </Button>
                <Button variant="outline" className="w-full">
                  Save View
                </Button>
                <Button variant="outline" className="w-full">
                  Share Model
                </Button>
              </div>
            </Card>
          </div>

          {/* Issue Analysis */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              Design Analysis Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {mockIssues.map((issue) => {
                const Icon = issue.type === 'critical' ? AlertTriangle : issue.type === 'warning' ? AlertTriangle : Info;
                const bgColor = issue.type === 'critical' ? 'bg-red-50 border-red-200' : 
                              issue.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200';
                const iconColor = issue.type === 'critical' ? 'text-red-600' : 
                                 issue.type === 'warning' ? 'text-yellow-600' : 'text-blue-600';
                
                return (
                  <div key={issue.id} className={`p-4 border rounded-lg ${bgColor} cursor-pointer hover:shadow-md transition-all`}>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon className={`h-5 w-5 ${iconColor} mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={issue.type === 'critical' ? 'destructive' : issue.type === 'warning' ? 'secondary' : 'outline'} className="text-xs">
                            {issue.type}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">{issue.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{issue.description}</p>
                        <p className="text-xs font-medium text-accent">{issue.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span>1 Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span>1 Warning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span>1 Info</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Generate Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Viewer3D;
