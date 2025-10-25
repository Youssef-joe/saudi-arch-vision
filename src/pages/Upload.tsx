import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload as UploadIcon, File, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      toast.success(`File "${file.name}" uploaded successfully`);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast.success(`File "${file.name}" uploaded successfully`);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    toast.info("Starting AI analysis...");
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success("Analysis complete! View results below.");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-deepBlue bg-clip-text text-transparent">
                Upload & Analyze
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your architectural drawings for instant AI-powered analysis
            </p>
          </div>

          <Card
            className={`p-12 border-2 border-dashed transition-all duration-300 ${
              isDragging
                ? "border-accent bg-accent/5 shadow-gold"
                : "border-border hover:border-accent/50"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center space-y-6">
              {uploadedFile ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center shadow-gold">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">{uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-gradient-to-r from-primary to-deepBlue hover:shadow-elegant transition-all duration-300"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        "Start Analysis"
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setUploadedFile(null)}
                      disabled={isAnalyzing}
                    >
                      Upload Different File
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent/20 to-gold/20 rounded-full flex items-center justify-center">
                    <UploadIcon className="h-10 w-10 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      Drop your architectural plans here
                    </h3>
                    <p className="text-muted-foreground">
                      or click to browse files
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-secondary rounded-full">DWG</span>
                    <span className="px-3 py-1 bg-secondary rounded-full">DXF</span>
                    <span className="px-3 py-1 bg-secondary rounded-full">PDF</span>
                    <span className="px-3 py-1 bg-secondary rounded-full">IFC</span>
                    <span className="px-3 py-1 bg-secondary rounded-full">RVT</span>
                    <span className="px-3 py-1 bg-secondary rounded-full">PNG</span>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                    accept=".dwg,.dxf,.pdf,.ifc,.rvt,.png,.jpg,.jpeg"
                  />
                  <label htmlFor="file-upload">
                    <Button asChild className="cursor-pointer bg-gradient-to-r from-accent to-gold-light hover:shadow-gold transition-all duration-300">
                      <span>
                        <File className="mr-2 h-4 w-4" />
                        Browse Files
                      </span>
                    </Button>
                  </label>
                </>
              )}
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-2">
              <h4 className="font-semibold">Instant Analysis</h4>
              <p className="text-sm text-muted-foreground">
                AI-powered review in seconds
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <h4 className="font-semibold">Saudi Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Verified against official guidelines
              </p>
            </Card>
            <Card className="p-6 space-y-2">
              <h4 className="font-semibold">Actionable Insights</h4>
              <p className="text-sm text-muted-foreground">
                Clear recommendations for improvement
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
