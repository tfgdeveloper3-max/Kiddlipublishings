export interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message?: string;
}

export class ContactApiError extends Error {
    status?: number;
    fieldErrors?: Partial<Record<keyof ContactPayload, string>>;

    constructor(message: string, status?: number, fieldErrors?: ContactApiError["fieldErrors"]) {
        super(message);
        this.name = "ContactApiError";
        this.status = status;
        this.fieldErrors = fieldErrors;
    }
}

const ENDPOINT: string = import.meta.env.VITE_CONTACT_API_URL ?? "";

export async function sendContactMessage(payload: ContactPayload, signal?: AbortSignal): Promise<ContactResponse> {
    if (!ENDPOINT) {
        await new Promise((r) => setTimeout(r, 900));
        return { success: true, message: "Demo mode: set VITE_CONTACT_API_URL to send for real." };
    }

    let res: Response;
    try {
        res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(payload),
            signal,
        });
    } catch (err) {
        if ((err as Error).name === "AbortError") throw err;
        throw new ContactApiError("Message not sent. Check your connection and try again.");
    }

    let body: { message?: string; errors?: ContactApiError["fieldErrors"] } = {};
    try {
        body = await res.json();
    } catch {
        
    }

    if (!res.ok) {
        throw new ContactApiError(
            body.message ?? "Something went wrong on our side. Please try again in a moment.",
            res.status,
            body.errors,
        );
    }

    return { success: true, message: body.message };
}