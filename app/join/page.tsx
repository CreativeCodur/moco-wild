import type { Metadata } from "next"
import { BackButton } from "./back-button"

export const metadata: Metadata = {
  title: "Join MoCo Wild - Become a Guardian",
  description: "Join our community dedicated to protecting Montgomery County's wildlife and natural habitats.",
}

// Add the form config at the top
const formConfig = {
  id: "1FAIpQLSde4L5TgZeXi8OSq5sFYvU51FeXxRr_Z4DxdBGe8tAOYLbB6A",
  title: "MoCo Wild Guardian Application Form"
};

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden hero-section">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none hero-title">
                Become a Guardian
              </h1>
              <p className="mx-auto max-w-[700px] text-white dark:text-white md:text-xl hero-description">
                Join our community dedicated to protecting Montgomery County&apos;s wildlife and natural habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full flex-1 py-8 md:py-16 lg:py-20 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-2 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-full max-w-5xl">
            <BackButton />
            <div className="w-full bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg p-2 sm:p-4 md:p-8 backdrop-blur-sm flex flex-col items-center">
              <div className="w-full flex-1" style={{minHeight: '70vh'}}>
                <iframe
                  src={`https://docs.google.com/forms/d/e/${formConfig.id}/viewform?embedded=true`}
                  width="100%"
                  height="100%"
                  style={{ border: "none", minHeight: '70vh', width: '100%' }}
                  title={formConfig.title}
                  allowFullScreen
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

