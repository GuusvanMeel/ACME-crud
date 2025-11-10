// app/lib/supabaseBrowser.ts
"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// If you have a generated Database type, you can do: <Database> as generic

export const supabaseBrowser = createClientComponentClient();
