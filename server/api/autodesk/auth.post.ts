export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    try {
        const response: any = await $fetch(
            "https://developer.api.autodesk.com/authentication/v2/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    client_id: config.apsClientId,
                    client_secret: config.apsClientSecret,
                    grant_type: "client_credentials",
                    scope: "data:write data:read bucket:read bucket:create bucket:delete",
                }),
            }
        );
        // console.log("[AUTODESK-TOKEN-GET-response]: ", response);
        return response.access_token;
    } catch (error: any) {
        console.log("[AUTODESK-TOKEN-GET-error]: ", error);
    }
});
