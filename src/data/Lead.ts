export interface LeadPayload {
    name: string;
    email: string;
    phone_number: string;
    message: string;
}

export class LeadApiError extends Error {
    status?: number;

    constructor(message: string, status?: number) {
        super(message);
        this.name = "LeadApiError";
        this.status = status;
    }
}

const LEAD_URL = "https://leads.authorpublishers.us/api/lead/90DDxG8egbqPAWnS6IPLy4xxI3il8lsM";

async function post(payload: LeadPayload, signal?: AbortSignal): Promise<Response> {
    const body = JSON.stringify(payload);
    try {
        return await fetch(LEAD_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
            signal,
        });
    } catch (err) {
        if ((err as Error).name === "AbortError") throw err;
        console.warn("Lead API: JSON request was blocked, retrying as a simple request.", err);
        return await fetch(LEAD_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=UTF-8" },
            body,
            signal,
        });
    }
}

export async function sendLead(payload: LeadPayload, signal?: AbortSignal): Promise<unknown> {
    let res: Response;
    try {
        res = await post(payload, signal);
    } catch (err) {
        if ((err as Error).name === "AbortError") throw err;
        console.error("Lead API request failed:", err);
        throw new LeadApiError("We couldn't reach our server. Check your connection and try again.");
    }

    let data: { success?: boolean; status?: string; message?: string } | null = null;
    try {
        data = await res.json();
    } catch {

    }

    const failed = !res.ok || data?.success === false || data?.status === "error";
    if (failed) {
        console.error("Lead API responded with an error:", res.status, data);
        throw new LeadApiError(data?.message ?? "Something went wrong on our side. Please try again in a moment.", res.status);
    }
    return data;
}