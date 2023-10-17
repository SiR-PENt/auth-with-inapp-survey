"use client";
import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

useEffect(() => {
formbricks.init({
environmentId: "cll0s7ehs002rta0hno0t98bi",
apiHost: "https://app.formbricks.com",
debug: true, // remove when in production
});
}, []);

useEffect(() => {
formbricks?.registerRouteChange();
}, [pathname, searchParams]);

return null;
}

