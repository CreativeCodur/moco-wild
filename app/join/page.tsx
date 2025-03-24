import type { Metadata } from "next"
import { BackButton } from "./back-button"

export const metadata: Metadata = {
  title: "Join MoCo Wild - Become a Guardian",
  description: "Join our community dedicated to protecting Montgomery County's wildlife and natural habitats.",
}

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 nature-gradient clip-wave z-0"></div>
        <div className="absolute inset-0 leaf-pattern z-0 opacity-30"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-normal tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Become a Guardian
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Join our community dedicated to protecting Montgomery County&apos;s wildlife and natural habitats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden cozy-section">
        <div className="absolute inset-0 forest-pattern opacity-70"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-5xl">
              <BackButton />

              <div className="w-full bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg p-4 sm:p-6 backdrop-blur-sm">
                <div className="w-full overflow-hidden" style={{ height: "1200px" }}>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSexJ6Cen6QnSrCyGHPGjkTaCTaN130tK8pmUD3qYuTvDWx4pA/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    title="MoCo Wild Guardian Application Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

