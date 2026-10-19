
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth/callback")({
  component: AuthCallback,
});

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;

    async function finishLogin() {
      const { error } = await supabase.auth.getSession();

      if (!active) return;

      if (error) {
        await navigate({ to: "/auth", replace: true });
        return;
      }

      const { data } = await supabase.auth.getUser();

      if (!active) return;

      if (data.user) {
        await navigate({ to: "/", replace: true });
      } else {
        await navigate({ to: "/auth", replace: true });
      }
    }

    void finishLogin();

    return () => {
      active = false;
    };
  }, [navigate]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <p>Completing Google sign-in...</p>
    </main>
  );
}
