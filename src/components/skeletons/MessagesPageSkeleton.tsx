import { Skeleton } from "@/components/ui/skeleton";

export default function MessagesPageSkeleton() {
  return (
    <main className="mx-auto min-h-full w-full max-w-5xl overflow-hidden bg-background py-8">
      <div className="h-full min-h-[38rem] overflow-hidden rounded-2xl border bg-card">
        <div className="flex h-full min-h-0 flex-col">
          <div className="shrink-0 border-b p-3">
            <Skeleton className="h-9 w-full rounded-lg" />
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-2 rounded-xl border p-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="min-w-0 flex-1 space-y-2">
                    <Skeleton className="h-4 w-32 rounded-lg" />
                    <Skeleton className="h-3 w-24 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shrink-0 p-3">
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
