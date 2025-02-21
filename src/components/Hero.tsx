
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            AI-Powered UI Design Partner
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your ideas into beautiful, functional user interfaces with the power of AI.
            Our platform helps you create stunning designs in minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/chat">
              <Button size="lg">
                Start Creating
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
