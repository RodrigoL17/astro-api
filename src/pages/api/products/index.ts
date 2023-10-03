import type { APIRoute } from "astro";
import { supabase } from "../../../supabase";

export const GET:APIRoute = async () => {
    const products = await supabase.from("Productos").select("*")
    return new Response (JSON.stringify({products: products}))
}